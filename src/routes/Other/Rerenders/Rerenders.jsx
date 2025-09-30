import StateChangeComponent from "./StateChangeComponent";
import NoneStateChangeComponent from "./NoneStateChangeComponent";

export default function Rerenders() {
  console.log("The parent container rendered!");

  return (
    <div>
      <StateChangeComponent />
      <NoneStateChangeComponent />
    </div>
  );
}
