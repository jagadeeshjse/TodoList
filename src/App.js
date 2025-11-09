import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Note from './components/Note'
import './App.css'

const STORAGE_KEY = 'todo_notes_v1'

const App = () => {
  const [data, setData] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  const [editingItem, setEditingItem] = useState(null) // currently edited note or null

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    } catch { }
  }, [data])

  const addData = (newData) => {
    setData(prevData => {
      const ts = Date.now()
      return [...prevData, { ...newData, id: ts, createdAt: ts, updatedAt: ts }]
    })
  }

  const deleteNote = (id) => {
    setData(prevNotes => prevNotes.filter(note => note.id !== id));
    // if the deleted note was being edited, clear edit state
    setEditingItem(prev => (prev && prev.id === id ? null : prev))
  }

  // start editing: populate Content form
  const startEdit = (note) => {
    setEditingItem(note)
  }

  // update note by id and clear editing state
  const updateNote = (id, updatedFields) => {
    const ts = Date.now()
    setData(prevNotes => prevNotes.map(note => note.id === id ? { ...note, ...updatedFields, updatedAt: ts } : note))
    setEditingItem(null)
  }

  const cancelEdit = () => setEditingItem(null)

  return (
    <div className='content'>
      <Header />
      <Content onAdd={addData} onUpdate={updateNote} editItem={editingItem} onCancelEdit={cancelEdit} />
      <div className='list-notes'>
        {data.map((noteItem) => (
          <Note
            key={noteItem.id}
            id={noteItem.id}
            title={noteItem.title}
            content={noteItem.content}
            createdAt={noteItem.createdAt}
            updatedAt={noteItem.updatedAt}
            onDelete={deleteNote}
            onStartEdit={startEdit}
          />
        ))}
      </div>
    </div>
  )
}

export default App
