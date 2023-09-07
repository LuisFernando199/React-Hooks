import { useCallback, useState } from "react";
import { IncrementCallBack } from "./IncrementCallBack";
/*useCallback memorizaremos una funcion para que no se re-renderice*/

export const UseCallBackComponent = () => {
  const [counter, setCounter] = useState(0);

  const incrementPadre = useCallback(
    (val) => {
        setCounter((contador) => contador + val);// no podemos memorizar counter porque sino el valor no cambia
      },[]
  ) 
  return (
    <>
    <h1>useCallback</h1>
      <h2>Contador: {counter}</h2>
      <IncrementCallBack incrementar={incrementPadre} />
    </>
  );
};
