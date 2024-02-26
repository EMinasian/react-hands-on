import { useState } from "react";
import explanation from "./explanation.json";
import "../../Globals.css";
import ExplanationSection from "../ExplanationSection/ExplanationSection";

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
      <div className="display-section">
        <h2>Scheduling in useEffect</h2>
        <p className="result-text">The count: {count}</p>
        <button className="neg-button" onClick={incorrectHandleSet}>
          Incorrect increase by two
        </button>
        <button className="pos-button" onClick={correctHandleSet}>
          Correct increase by two
        </button>
      </div>
      <ExplanationSection
        title={explanation?.title}
        description={explanation?.description}
      />
    </>
  );
}
