import { useRef, useState } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const descriptionInputRef = useRef();
  const [temTransfer, setTemTransfer] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    const value = descriptionInputRef.current.value.trim();
    let valueArray = value.split("");
    let textArr = [];
    for (let i = 0; i < valueArray.length; i++) {
      let code = valueArray[i].charCodeAt(0);
      console.log(code);
      if (code > 64 && code < 91) {
        let newWord = String.fromCharCode(code + 32);
        textArr.push("-" + newWord);
      } else if (code === 44) {
        textArr.push(";");
      } else if (code === 34) {
        textArr.push("");
      } else {
        textArr.push(String.fromCharCode(code));
      }
    }
    textArr.push(";");
    const newData = textArr.join("");

    setTemTransfer(newData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
      <div style={{ color: "#000", fontSize: 20 }}>{temTransfer}</div>
    </Card>
  );
}

export default NewMeetupForm;
