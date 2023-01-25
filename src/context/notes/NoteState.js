import { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = ({ children }) => {
  const notesInitial = [
    {
      id: '63cf5f5366ae36582bb8f81c',
      title: 'test',
      description: 'testing',
      tag: 'Changed tag',
      user: '63ce1602468a14bdc00df47d',
      date: '1674534739603',
      __v: 0,
    },
    {
      id: '63d0afc3abcda05588fecae5',
      title: 'test 2',
      description: 'delete me!',
      tag: 'General',
      user: '63ce1602468a14bdc00df47d',
      date: '1674620867205',
      __v: 0,
    },
    {
      id: '63d0afc3abcda05588fecae6',
      title: 'test 3',
      description: 'delete me!',
      tag: 'General',
      user: '63ce1602468a14bdc00df47d',
      date: '1674620867205',
      __v: 0,
    },
    {
      id: '63d0afc3abcda05588fecae7',
      title: 'test 4',
      description: 'delete me!',
      tag: 'General',
      user: '63ce1602468a14bdc00df47d',
      date: '1674620867205',
      __v: 0,
    },
  ]
  const [notes, setNotes] = useState(notesInitial)

  // Add note
  const addNote = (title, description, tag) => {
    // TODO: API call
    const note = {
      id: '63d0afc3abcda05588fecae8',
      title,
      description,
      tag,
      user: '63ce1602468a14bdc00df47d',
      date: '1674620867205',
      __v: 0,
    }
    setNotes(notes.concat(note))
  }

  // Edit note
  const editNote = () => {}

  // Delete note
  const deleteNote = () => {}

  return (
    <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  )
}

export default NoteState
