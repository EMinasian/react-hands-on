import ListItem from "../StartPage/ListItem";
import other from "./other.json"

export default function Other() {
  return (
    <div>
      {other.map((item) => (
        <ListItem item={item} key={item?.id}/>
      ))}
    </div>
  );
}