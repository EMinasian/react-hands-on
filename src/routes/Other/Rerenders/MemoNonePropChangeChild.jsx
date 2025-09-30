import { memo } from "react";

function MemoNonePropChangeChild() {
  console.log("The memorized child without prop rendered!");

  return <div>Some test value</div>;
}

export default memo(MemoNonePropChangeChild);
