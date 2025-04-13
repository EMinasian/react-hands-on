import ListItem from "../StartPage/ListItem";
import designPatterns from "./designPatterns.json"

export default function DesignPatterns() {
  return (
    <div>
      {designPatterns.map((item) => (
        <ListItem item={item} key={item?.id}/>
      ))}
    </div>
  );
}