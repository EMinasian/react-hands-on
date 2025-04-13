import ListItem from "../StartPage/ListItem"
import hooks from "./hooks.json"

export default function Hooks() {
  return (
        <div>
          {hooks.map((item) => (
            <ListItem item={item} key={item?.id}/>
          ))}
        </div>
  )
}