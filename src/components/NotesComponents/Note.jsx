import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function Note() {
  return (
    <div className="note">
        <div>hello</div>
      <div className="note__footer">
        <DeleteForeverIcon
          className="note__delete"
          aria-hidden="true"
          onclick=''
        ></DeleteForeverIcon>
      </div>
    </div>
  );
}

export default Note;
