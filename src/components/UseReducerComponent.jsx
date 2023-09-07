/* useReducer, se le pasa un reducer, el estado inicial,
 te devuelve el estado como un useState, y te devuelve el dispacth
 por el que vamos a despachar las actions que van con el type que es el que 
 elige alguno de los switch y el payload que mandamos en el
  la accion para hacer una o otra cosa*/
import { useForm } from "../hooks/useForm";
import { useReducer } from "react";

const initialState = [
  {
    id: new Date().getTime(),
    tarea: "Explicar Reducers",
    finalizada: false,
  },
];

const tareaReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "[TAREAS] Agregar Tarea":
      return [...state, action.payload];
    case "[TAREAS] Finalizar Tarea":
      return state.map((tarea) => {
        if (tarea.id === action.payload.id) {
          return {
            ...tarea,
            finalizada: !tarea.finalizada,
          };
        }
        return tarea;
      });
    // return [...state, action.payload]

    case "[TAREAS] Eliminar Tarea":
      return state.filter((tarea) => tarea.id !== action.payload);
    // return [...state, action.payload]

    case "[Tareas] Borrar Tareas":
      return [];
    default:
      return state;
  }
};

export const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(tareaReducer, initialState);

  const { tarea, formState, onInputChange } = useForm({ tarea: "" });

  const addTaskForm = (e) => {
    e.preventDefault();
    if (formState.tarea === "") return;

    const tarea = {
      id: new Date().getTime(),
      tarea: formState.tarea,
      finalizada: false,
    };
    const action = {
      type: "[TAREAS] Agregar Tarea",
      payload: tarea,
    };
    dispatch(action);
  };

  const finalizarTarea = ({ id }) => {
    const action = {
      type: "[TAREAS] Finalizar Tarea",
      payload: id,
    };
    dispatch(action);
  };

  const eliminarTarea = ({ id }) => {
    const action = {
      type: "[TAREAS] Eliminar Tarea",
      payload: id,
    };
    dispatch(action);
  };

  const reset = () => {
    const action = {
      type: "[Tareas] Borrar Tareas",
      payload: "",
    };
    dispatch(action);
  };

  return (
    <>
      <form onSubmit={addTaskForm}>
        <h1>useReducer</h1>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="tarea"
            placeholder="Ingresa tarea"
            onChange={onInputChange}
            value={tarea}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button type="button" onClick={reset} className="btn btn-danger">
          Reset
        </button>
      </form>
      <ul className="list-group">
        {state.map((item) => {
          return (
            <li
              className="list-group-item d-flex justify-content-between"
              key={item.id}
            >
              <span> {item.tarea}</span>
              <div>
                <input
                  type="checkbox"
                  value={item.finalizada}
                  onChange={() => finalizarTarea(item)}
                />
                <button onClick={() => eliminarTarea(item)}>❌</button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
