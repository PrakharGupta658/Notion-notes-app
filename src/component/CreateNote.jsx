import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [expent , setExpend] = useState(false);

  const handleEvent = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;

    // object destructuring
    const { name, value } = event.target;

    // setNote has property to handel preveus data
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
    // when user add not input is empty
    setNote({
      title: "",
      content: "",
    });
  };

  const expentHandeler=()=>{
    setExpend(true);
  }

  return (
    <>
      <div className="c-n-Container">
        <TextField
          id="filled-basic"
          label="Title"
          variant="filled"
          className="txtField"
          type="text"
          value={note.title}
          onChange={handleEvent}
          name="title"
          onClick={expentHandeler}
        />
        {/* <TextField id="standard-basic" label="Title" variant="standard"  className="txtField"
          type="text"
          value={note.title}
          onChange={handleEvent}
          name="title"/>
        <br /> */}
       { expent ? 
        <TextField
          id="filled-multiline-static"
          label="Take a note.."
          multiline
          rows={5}
          defaultValue=""
          variant="filled"
          className="txtField"
          value={note.content}
          onChange={handleEvent}
          name="content"
        /> : null}
        {/* <TextField
          id="standard-multiline-static"
          label="write a note.."
          multiline
          rows={5.3}
          defaultValue=""
          variant="filled"
          className="txtField"
          value={note.content}
          onChange={handleEvent}
          name="content"
        /> */}
        <IconButton aria-label="delete" size="large" onClick={addEvent}>
          <AddIcon fontSize="inherit" className="plusbtn" />
        </IconButton>
      </div>
    </>
  );
};

export default CreateNote;
