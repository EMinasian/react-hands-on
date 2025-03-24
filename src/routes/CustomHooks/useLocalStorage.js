import { useState } from "react";

const setInitial = () => {
  const count = localStorage.getItem('count')
  return Number(count) ?? 0
}

export default function useCount(initialValue) {

  const [value, setValue] = useState(setInitial)

  const increment = () => { setValue(prev => prev + 1) } 
  const decrement = () => { setValue(prev => prev - 1) } 

  return {
    count: value,
    increment,
    decrement
  }
}