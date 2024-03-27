import Component1 from "./Component1";
import Component2 from "./Component2";
import DisplaySection from "../../components/DisplaySection";
import ExplanationSection from "../../components/ExplanationSection";
import explanation from "./explanation.json";

export default function VanillaCSSNotScoping() {
  return (
    <>
      <DisplaySection heading="Scope of Vanilla CSS">
        <Component1 />
        <Component2 />
      </DisplaySection>
      {/* <ExplanationSection explanation={explanation} /> */}
    </>
  );
}
