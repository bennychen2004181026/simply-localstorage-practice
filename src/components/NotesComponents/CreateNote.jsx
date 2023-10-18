import LinearProgress from "@mui/material/LinearProgress";

function CreateNote() {
  const charLimit = 100;
  const charLeft = 50;
  return (
    <div className="note">
      <textarea
        name=""
        id=""
        cols="10"
        rows="6"
        maxLength={charLimit}
        placeholder="Type..."
        value=""
      ></textarea>
      <div className="note__footer">
        <span className="label">{charLeft} left</span>
        <button className="note__save">Save</button>
      </div>
      <LinearProgress variant="determinate" value={charLeft}/>
    </div>
  );
}

export default CreateNote;
