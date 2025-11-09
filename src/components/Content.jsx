import { Fab } from '@mui/material';
import React, { useState, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';

const Content = (props) => {
  const { onAdd, editItem, onUpdate, onCancelEdit } = props;

  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  // populate form when editItem changes
  useEffect(() => {
    if (editItem) {
      setNote({ title: editItem.title || '', content: editItem.content || '' });
    } else {
      setNote({ title: '', content: '' });
    }
  }, [editItem]);

  const submitData = (event) => {
    event.preventDefault();
    if (!note.title.trim() && !note.content.trim()) return;

    if (editItem) {
      if (typeof onUpdate === 'function') onUpdate(editItem.id, note);
    } else {
      if (typeof onAdd === 'function') onAdd(note);
    }

    setNote({ title: '', content: '' });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  return (
    <div>
      <form className="todo-place" onSubmit={submitData}>
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

        {/* Actions container: cancel + submit (FAB) */}
        <div className="form-actions">
          {editItem && (
            <button type="button" onClick={onCancelEdit} className="cancel-btn">
              Cancel
            </button>
          )}

          <Fab type="submit" className="add-btn" size="small" aria-label="add">
            <AddIcon />
          </Fab>
        </div>
      </form>
    </div>
  );
};

export default Content;
