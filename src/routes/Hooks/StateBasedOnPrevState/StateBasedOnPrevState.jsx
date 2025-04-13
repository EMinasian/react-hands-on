import { useState } from "react";
import explanation from "./explanation.json";
import "../../../Globals.css";
import DisplaySection from "../../../components/DisplaySection";
import ExplanationSection from "../../../components/ExplanationSection";

export default function StateBasedOnPrevState() {
  const [count, setCount] = useState(0);

  // Incorrectly increases by only 1
  function incorrectHandleSet() {
    setCount(count + 1); // 0 + 1
    setCount(count + 1); // again 0 + 1!
  }

  // Correctly increases by 2
  function correctHandleSet() {
    setCount((current) => current + 1);
    setCount((current) => current + 1);
  }

  return (
    <>
      <DisplaySection heading="Scheduling in useEffect">
        <p className="result-text">The count: {count}</p>
        <button className="neg-button" onClick={incorrectHandleSet}>
          Incorrect increase by two
        </button>
        <button className="pos-button" onClick={correctHandleSet}>
          Correct increase by two
        </button>
      </DisplaySection>
      <ExplanationSection
        explanation={explanation}
      />
    </>
  );
}
