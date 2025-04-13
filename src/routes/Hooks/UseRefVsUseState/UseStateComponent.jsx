import { useState } from "react";

export default function UseStateComponent() {
  const [name, setName] = useState("");
  const [nameValue, setNameValue] = useState("");

  console.log("rerednered!");
  
  return (
    <div className="display-box-component">
      Your input: {name}
      <input
        value={nameValue}
        onChange={(e) => {
          setNameValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setName(nameValue);
        }}
      >
        Save
      </button>
    </div>
  );
}
