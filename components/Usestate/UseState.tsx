import React, { useState } from "react";
import s from "./UseState.module.scss";

const UseState = () => {
  const [count, setCount] = useState(0);

  const Helo = () => {
    setCount(count + 1);
  };
  return (
    <div className={s.container}>
      <h2>Hii {count}</h2>
      <button onClick={Helo}>click</button>
    </div>
  );
};

export default UseState;
