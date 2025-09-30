import { memo } from "react";

function MemoPropChangeChild({ value }) {
  console.log("The memorized child with prop change rendered!");

  return <div>{`The prop value is: ${value}`}</div>;
}

export default memo(MemoPropChangeChild);
