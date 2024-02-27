import { Link } from "react-router-dom";
import "./StartPage.css"

export default function ListItem({ item }) {
  return (
    <div className="list-item">
      <h3 className="list-item-title">{item?.title}</h3>
      <Link to={item?.linkTo} key={item?.id}>
        <span>Read more...</span>
      </Link>
    </div>
  );
}
