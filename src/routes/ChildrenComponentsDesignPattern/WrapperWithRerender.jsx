import { useState } from "react"
import ChildComponent from "./ChildComponent"

export default function WrapperWithRerender() {

  const [count, setCount] = useState(0)

  return (
    <>
      <ChildComponent />
      <p>{count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>increase count</button>
    </>
  )
}