import React from "react";
// para usar el useCallBack hay que traer a este compoenente React.memo
export const IncrementCallBack = React.memo(({ incrementar }) => {
  console.log("Me estoy re-renderizando");
  return (
    <>
      <button className="btn btn-primary" onClick={() => incrementar(10)}>
        +
      </button>
    </>
  );
});
IncrementCallBack.displayName = 'IncrementCallBack';
