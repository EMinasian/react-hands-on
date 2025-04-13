import DisplaySecction from "../../../components/DisplaySection";
// import UseStateComponent from "./UseStateComponent";
import UseRefComponent from "./useRefComponent";
import "../../../Globals.css"

export default function UseStateVsUseRef() {
  return (
    <>
      <DisplaySecction heading={"Hooks: useState vs. useRef"}>
        {/* <UseStateComponent /> */}
        <UseRefComponent />
      </DisplaySecction>
    </>
  );
}
