import ListItem from "./ListItem";
import data from "./listData.json";

export default function StartPage() {
  return (
    <div>
      {data.map((item) => (
        <ListItem item={item} key={item?.id}/>
      ))}
    </div>
  );
}
