import useCount from "./useLocalStorage";

export default function CustomHooks() {

  const {count, increment, decrement} = useCount()

  return (
    <>
      <span>{`count: ${count}`}</span>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}