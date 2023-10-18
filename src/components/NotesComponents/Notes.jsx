import { useEffect, useState } from "react";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { v4 as uuid } from "uuid";

function Notes() {
  // eslint-disable-next-line
  const [notes, setNotes] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);
  const [inputText, setInputText] = useState("");

  // when typing, add the text to the input text state
  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  // add new note to the notes state
  const saveHandler = () => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid,
        text: inputText,
      },
    ]);
    setInputText("");
  };

  useEffect(() => {
    console.log("notes", notes);
    localStorage.setItem('Notes',JSON.stringify(notes))
  }, [notes]); //componetDidMount+componentDidUpdate

  return (
    <div className="notes">
      <Note />
      <CreateNote
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
      />
    </div>
  );
}

export default Notes;
