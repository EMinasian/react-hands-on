import { useRef, useState } from "react";

export default function UseRefComponent() {
  const [name, setName] = useState("");
  const inputRef = useRef("");

  console.log("rerednered!");
  
  return (
    <div className="display-box-component">
      Your input: {name}
      <input ref={inputRef} />
      <button
        onClick={() => {
          setName(inputRef.current?.value);
        }}
      >
        Save
      </button>
    </div>
  );
}
