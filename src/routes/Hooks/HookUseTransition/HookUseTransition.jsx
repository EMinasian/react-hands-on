import { useTransition, useState } from "react";

export default function HookUseTransition() {

  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  function handleChange(e) {
    setInput(e.target.value)
    startTransition(() => {
      const currentList = []
      for(let i = 0; i < 20000; i++) {
        currentList.push(e.target.value)
      }
      setList(currentList)
    })
  }

  return (
    <>
      <div>{isPending ? 'It is pending now' : 'not pedning'}</div>
      <input type='text' value={input} onChange={handleChange}/>
      {
        list.map(item => <p>{item}</p>)
      }
    </>
  )
}