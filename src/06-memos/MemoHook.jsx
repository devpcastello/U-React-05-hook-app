import { useState } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = (iterationNumber = 1000) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("ahí vamos...");
  }

  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>
        Counter <small> {counter} </small>
      </h1>
      <hr />

      <h4>{heavyStuff(5000)}</h4>

      <button
        className="btn btn-primary"
        onClick={() => {
          increment();
        }}
      >
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        show/hide {JSON.stringify(show)}
      </button>
    </>
  );
};
