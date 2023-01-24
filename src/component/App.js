import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Notes from "./Notes";
import NotesIcon from '@mui/icons-material/Notes';

const App = () => {
  const [addItem, setTextItem] = useState([]);
  console.log(addItem);

  const addNote = (note) => {
    setTextItem((prevData) => {
      return [...prevData, note];
    });
    console.log(note);
  };

  const onDelete = (id) => {
    setTextItem((oldData) => 
      oldData.filter((curData, idx) => {
        // show all notes whose id is not equal index
        return idx !== id;
      })
    );
  };
  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      <h1 className="noteHeading">Notes <NotesIcon className="no-ic"/> </h1>
      {addItem.map((val, index) => {
        if(val.title !== ""){
        return (
          <Notes
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
        }
      })}
      <Footer />
    </>
  );
};

export default App;
