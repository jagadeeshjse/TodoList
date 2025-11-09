import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

const fmt = (ts) => {
  if (!ts) return ''
  const d = new Date(ts)
  return d.toLocaleString()
}

const Note = ({ id, title, content, createdAt, updatedAt, onDelete, onStartEdit }) => {
  const handleDelete = () => {
    if (typeof onDelete === 'function') onDelete(id);
  };

  const handleStartEdit = () => {
    if (typeof onStartEdit === 'function') onStartEdit({ id, title, content });
  };

  return (
    <div className="note-card">
      <div className="note-body">
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <h4 className="note-title">{title || 'Untitled'}</h4>
          <small className="note-meta">{updatedAt ? `Updated: ${fmt(updatedAt)}` : `Created: ${fmt(createdAt)}`}</small>
        </div>
        <p className="note-content">{content || ''}</p>
      </div>
      <div className="note-actions">
        <IconButton aria-label="edit" size="small" onClick={handleStartEdit}>
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="delete" size="small" onClick={handleDelete}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
};

export default Note;
