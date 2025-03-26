import { useState } from "react"

export default function WrapperWithoutRerender({ children }) {

  const [count, setCount] = useState(0)

  return (
    <>
      {children}
      <p>{count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>increase count</button>
    </>
  )
}