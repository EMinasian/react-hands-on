import { useState } from "react";

import '../../Globals.css'

export default function UseStateScheduling() {
  const [value, setValue] = useState("before set");

  function handleClick() {
    setValue("after set");
    console.log(value);
  }

  return (
    <div className="display-section">
      <h2>Scheduling in useEffect</h2>
      <p className="result-text">The value: {value}</p>
      <button onClick={handleClick}>Set value</button>
    </div>
  );
}
