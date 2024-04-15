import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const Note = (props) => {
  const handleClick = () => {
    props.onDelete(props.id);
  };
  return (
    <div className="note-info">
      <div className="title-content">
        <div>{props.title}</div>
        <div>{props.content}</div>
      </div>
      <div onClick={handleClick}>
        <DeleteIcon />
      </div>
    </div>
  );
};

export default Note;
