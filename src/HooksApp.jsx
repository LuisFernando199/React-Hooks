import { CounterComponent } from "./components/CounterComponent";
import "./app.css";
import { FromComponent } from "./components/FromComponent";
import { FetchComponent } from "./components/FetchComponent";
import { UseMemoHeavyCalculation } from "./components/UseMemoHeavyCalculation";
import { UseCallBackComponent } from "./components/UseCallBackComponent";
import { UseReducerComponent } from "./components/UseReducerComponent";

export const HooksApp = () => {
  return (
    <>
      <h1>Aplicacion de Hooks</h1>
      <hr />
      <CounterComponent />
      <hr />
      <FromComponent />
      <hr />
      <FetchComponent />
      <hr />
      <UseMemoHeavyCalculation />
      <hr />
      <UseCallBackComponent />
      <hr />
      <UseReducerComponent />
    </>
  );
};
