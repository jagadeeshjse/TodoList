import React, { useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Note from './components/Note'



const App = () => {
  const [data, setData ] = useState([])

  const addData = (newData) =>{
    setData(prevData => {
      return [...prevData, newData]
    })
  }
  const deleteNote =  (id) =>{
    setData(prevNotes => prevNotes.filter((_, index) => index !== id));
  }

  console.log(data);
  return (
    <div className='content'>
      <Header />
      <Content onAdd={addData}/>
      <div className='list-notes'>
      {
        data.map((noteItem, index)=>{
          return(
            
              <Note key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}/>
            
            
          )

        })
      }
      </div>
    </div>
  )
}

export default App
