import LinearProgress from "@mui/material/LinearProgress";
// eslint-disable-next-line
function CreateNote({textHandler,saveHandler,inputText}) {
  const charLimit = 100;
  // eslint-disable-next-line
  const charLeft = charLimit-inputText.length;
  return (
    <div className="note">
      <textarea
        name=""
        id=""
        cols="10"
        rows="6"
        maxLength={charLimit}
        placeholder="Type..."
        value={inputText}
        onChange={textHandler}
      ></textarea>
      <div className="note__footer">
        <span className="label">{charLeft} left</span>
        <button className="note__save" onClick={saveHandler}>Save</button>
      </div>
      <LinearProgress variant="determinate" value={charLeft}/>
    </div>
  );
}

export default CreateNote;
