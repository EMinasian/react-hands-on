import { useState } from "react";

export default function CustomHooks() {

  const [name, setName] = useState()

  return (
    <input
      type="text"
      value={name}
      onChange={(e) => { setName(e.target.value) }}
    />
  )
}