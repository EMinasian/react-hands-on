import { useState } from "react";
import explanation from "./explanation.json";
import "../../Globals.css";
import DisplaySection from "../../components/DisplaySection";
import ExplanationSection from "../../components/ExplanationSection";

export default function UseStateScheduling() {
  const [value, setValue] = useState("before set");

  function handleClick() {
    setValue("after set");
    console.log(value);
  }

  return (
    <>
      <DisplaySection heading="Scheduling in useEffect">
        <p className="result-text">The value: {value}</p>
        <p>Also check the console for the logged value.</p>
        <button onClick={handleClick}>Set value</button>
      </DisplaySection>
      <ExplanationSection
        explanation={explanation}
      />
    </>
  );
}
