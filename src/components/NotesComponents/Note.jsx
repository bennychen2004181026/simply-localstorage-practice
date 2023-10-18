import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function Note({note,deleteNote}) {
  return (
    <div className="note" >
        <div>{note.text}</div>
      <div className="note__footer">
        <DeleteForeverIcon
          className="note__delete"
          aria-hidden="true"
          onClick={()=>deleteNote(note.id)}
        ></DeleteForeverIcon>
      </div>
    </div>
  );
}

export default Note;
