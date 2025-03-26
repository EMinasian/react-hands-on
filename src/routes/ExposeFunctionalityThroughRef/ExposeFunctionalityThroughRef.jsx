import { useRef } from "react"
import Counter from "./Counter";

export default function ExposeFunctionalityThroughRef() {

  const componentRef = useRef(null);

  return (
    <>
      <Counter componentRef={componentRef} />
      <button onClick={() => {componentRef.current.increase()}}>Increase</button>
    </>
  )

}