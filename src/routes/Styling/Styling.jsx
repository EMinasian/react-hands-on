import ListItem from "../StartPage/ListItem"
import styling from "./styling.json"

export default function Styling() {
  return (
        <div>
          {styling.map((item) => (
            <ListItem item={item} key={item?.id}/>
          ))}
        </div>
  )
}