import { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = ({ children }) => {
  const host = 'http://localhost:5000/api/notes'
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  // Fetch all notes
  const fetchNotes = async () => {
    // API call
    const res = await fetch(`${host}/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('auth-token'),
      },
    })
    const data = await res.json()
    setNotes(data)
  }

  // Add note
  const addNote = async (title, description, tag) => {
    // API call
    const res = await fetch(`${host}/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('auth-token'),
      },
      body: JSON.stringify({ title, description, tag }),
    })
    const data = await res.json()
    setNotes(notes.concat(data))
  }

  // Edit note
  const editNote = async (id, title, description, tag) => {
    // API call
    await fetch(`${host}/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('auth-token'),
      },
      body: JSON.stringify({ title, description, tag }),
    })

    // Logic to edit in client
    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let i = 0; i < notes.length; i++) {
      const el = notes[i]
      if (el._id === id) {
        newNotes[i].title = title
        newNotes[i].description = description
        newNotes[i].tag = tag
        break
      }
    }
    setNotes(newNotes)
  }

  // Delete note
  const deleteNote = async (id) => {
    // API call
    await fetch(`${host}/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('auth-token'),
      },
    })

    const newNotes = notes.filter((note) => note._id !== id)
    setNotes(newNotes)
  }

  return (
    <NoteContext.Provider
      value={{ notes, fetchNotes, addNote, editNote, deleteNote }}
    >
      {children}
    </NoteContext.Provider>
  )
}

export default NoteState
