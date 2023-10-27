import { useEffect, useState } from "react";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { v4 as uuidv4 } from "uuid";

function Notes() {
  const [notes, setNotes] = useState([]);
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
        id: uuidv4(),
        text: inputText,
      },
    ]);
    setInputText("");
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (Array.isArray(data) && data.length > 0) {
      setNotes(data);
    }
    setLoading(false);
  }, []);

  const deleteNote = (id) => {
    const filterNote = notes.filter((note) => note.id !== id);
    setNotes(filterNote);
  };

  useEffect(() => {
    if (!loading) {
      console.log(notes);
      localStorage.setItem("Notes", JSON.stringify(notes));
    }
  }, [notes, loading]); //componetDidMount+componentDidUpdate

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div className="notes">
      {notes > 0 &&
        notes.map((note) => (
          <Note key={note.id} note={note} deleteNote={deleteNote} />
        ))}
      <CreateNote
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
      />
    </div>
  );
}

export default Notes;
