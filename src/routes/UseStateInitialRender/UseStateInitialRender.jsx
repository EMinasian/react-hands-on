import { useState } from "react"
import DisplaySection from "../../components/DisplaySection"
import ExplanationSection from "../../components/ExplanationSection"
import explanation from "./explanation.json"

export default function UseStateInitialRender() {

  function init1() {
    console.log('function init 1 called')
    return 0 
  }

  function init2() {
    console.log('function init 2 called')
    return 0
  }

  const [state1, setState1] = useState(init1())
  const [state2, setState2] = useState(init2)

  return (
    <>
      <DisplaySection heading="Component render and use state" >
        <span>{state1}</span>
        <button onClick={() => { setState1(prev => prev + 1) }}>Increase state 1</button>
        <span>{state2}</span>
        <button onClick={() => { setState2(prev => prev + 1) }}>Increase state 2</button>
      </DisplaySection>
      <ExplanationSection explanation={explanation} />
    </>

  )
}