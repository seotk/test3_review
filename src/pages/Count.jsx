import { useState } from "react";

function Count() {
  let [count, setcount] = useState();
  return (
    <>
      <button
        onClick={() => {
          count > 1 ? setcount(count - 1) : setcount(1);
        }}
      >
        -
      </button>
      <p>{count}</p>
      <button
        onClick={() => {
          count < 9 ? setcount(count + 1) : setcount(9);
        }}
      >
        +
      </button>
    </>
  );
}
export default Count;
