import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const Notes = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <>
      <div className="flex">
        <div className="note-container">
          <h1>{props.title}</h1>
          <br />
          <p>{props.content}</p>
          <IconButton aria-label="delete" size="large" onClick={deleteNote}>
            <DeleteIcon className="dltbtn" />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default Notes;
