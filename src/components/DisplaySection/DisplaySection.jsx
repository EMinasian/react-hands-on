import "./DisplaySection.css";

export default function DisplaySection({ heading, children }) {
  return (
    <div className="display-section">
      <h2>{heading}</h2>
      {children}
    </div>
  );
}
