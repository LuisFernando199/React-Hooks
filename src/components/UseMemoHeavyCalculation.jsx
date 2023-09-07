import { useMemo, useState } from "react";
/*useMemo va ha memorizar en este caso la funcion getCalculo 
y cuando numberLists tenga un cambio la ejecutara, pero
cuando no, no se ejecutara*/
export const UseMemoHeavyCalculation = () => {
  const [numberList, setNumberList] = useState([2, 3, 4, 5, 6, 7, 8, 9]);

  const [show, setShow] = useState(true);

  const getCalculo = (numberList) =>
    useMemo(() => {
      console.log("Calculando");
      return numberList.reduce(
        (accumulator, currentValue) => accumulator * currentValue
      );
    }, [numberList]);

  const addNumber = () => {
    setNumberList([...numberList, numberList[numberList.length - 1] + 1]);
  };

  return (
    <>
    <h1>useMemo</h1>
      <h2>Calculo:</h2>
      <p>{getCalculo(numberList)}</p>

      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        {show ? "Mostrar" : "Ocultar"}
      </button>
      <button className="btn btn-primary" onClick={addNumber}>
        Agregar Numeros
      </button>
    </>
  );
};
