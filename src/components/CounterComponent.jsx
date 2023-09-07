import { useCounter } from "../hooks/useCounter";
//useCounter custom hook
export const CounterComponent = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h2>useCounter custom hook</h2>
      <h1>Counter: {counter}</h1>
      <button className="btn btn-success" onClick={() => increment()}>
        +
      </button>
      <button className="btn btn-warning" onClick={() => reset()}>
        Reset
      </button>
      <button className="btn btn-danger" onClick={() => decrement()}>
        -
      </button>
    </>
  );
};
