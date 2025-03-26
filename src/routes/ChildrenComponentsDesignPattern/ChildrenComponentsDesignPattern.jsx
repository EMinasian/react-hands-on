import { useState } from "react";
import WrapperWithRerender from "./WrapperWithRerender";
import WrapperWithoutRerender from "./WrapperWithoutRerender";
import ChildComponent from "./ChildComponent";

export default function ChildrenComponentsDesignPattern() {
  const [withRerender, setWithRerender] = useState(true)

  return (
    <>
      {withRerender ? <WrapperWithRerender /> : <WrapperWithoutRerender><ChildComponent /></WrapperWithoutRerender>}
      <button onClick={() => setWithRerender(prev => !prev)}>Switch</button>
    </>
  )
}