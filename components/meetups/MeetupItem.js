import { useRouter } from "next/router";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  const router = useRouter();
  const showDetailHandler = () => {
    router.push(`/${props.id}`);
  };

  return (
    <li className={classes.item} onClick={showDetailHandler}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <p>{props.address}</p>
          <h2>{props.title}</h2>
          <div className={classes.actions}>
            <p>
              {!!props.description
                ? props.description.slice(0, 50)
                : props.description}
            </p>
            <button onClick={showDetailHandler}>Show Details</button>
          </div>
          <div className={classes.footer}>
            <p>Marc Belgrave</p>
            <p>9 min read</p>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
