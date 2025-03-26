import { useState, useImperativeHandle } from "react"

export default function Counter({ componentRef }) {

  const [count, setCount] = useState(0)

  useImperativeHandle(componentRef, () => ({
    increase: () => { setCount(prev => prev + 1)}
  }))

  return (
    <>
      <p>{count}</p>
    </>
  )
}