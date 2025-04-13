import { createContext, useState, useContext } from "react";

const SelectContext = createContext(null)

function Select({ children }) {

  const [activeOption, setActiveOption] = useState("")

  return (
    <SelectContext.Provider value={{activeOption, setActiveOption}}>
      <select>
        {children}
      </select>
    </SelectContext.Provider>
  )
}

function Option({children}) {

  const context = useContext(SelectContext)

  /*
    If the Option is not used under the select,
    then the use will throw an error.
   */
  if (!context) {
    throw new Error("Option should be used inside a Select Component.")
  }

  return (
    <option>
      {children}
    </option>
  )
}

Select.Option = Option
export default Select

