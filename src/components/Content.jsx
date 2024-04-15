import { Fab } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

const Content = (props) => {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const submitData = (event) => {
    props.onAdd(note);
    setNote({
      title: '',
      content: '',
    });
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };
  return (
    <div>
      <form className="todo-place">
        <input
          type="text"
          placeholder="title"
          onChange={handleChange}
          value={note.title}
          name="title"
        />
        <textarea
          name="content"
          id=""
          cols="30"
          rows="3"
          placeholder="Take note ..."
          onChange={handleChange}
          value={note.content}
        />
        <Fab onClick={submitData} className="add-btn">
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
};

export default Content;
