import { useState } from "react";
import "./ExplanationSection.css";

export default function ExplanationSection({ title, description }) {
  const [currentBlock, setCurrentBlock] = useState(0);

  return (
    <div className="explanation-section">
      <h2 className="explanation-title ">{title}</h2>
      <menu>
        {description.map((item) => (
          <button
            onClick={() => {
              setCurrentBlock(item?.block);
            }}
            className="tab"
          >
            {item?.heading}
          </button>
        ))}
      </menu>
      <div className="description-section">
        {description[currentBlock].text}
      </div>
    </div>
  );
}
