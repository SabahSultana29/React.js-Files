import { useState, useEffect } from "react";

export default function Counter() {
  let [count, setcount] = useState(0);
  let incCount = () => {
    setcount((currCount) => currCount + 1);
  };
  useEffect(function printSomething() {
    console.log("this is the side- effect");
  }, []); //empty array is the use of side-effect
  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}> +1 Count</button>
    </div>
  );
}
