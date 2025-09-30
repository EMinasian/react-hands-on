import { useState } from "react";

import PropChangeChild from "./PropChangeChild";
import NonePropChangeChild from "./NonePropChangeChild";

export default function StateChangeComponent() {
  const [value, setValue] = useState(1);

  console.log("The component with state change rerendered!");

  return (
    <div>
      {`Value after change state: ${value}`}
      <button onClick={() => setValue((prev) => prev + 1)}>Change state</button>
      <PropChangeChild value={value} />
      <NonePropChangeChild />
    </div>
  );
}
