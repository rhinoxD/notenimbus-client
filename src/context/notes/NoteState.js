import { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = ({ children }) => {
  const notesInitial = [
    {
      _id: '63cf5f5366ae36582bb8f81c',
      title: 'test',
      description: 'testing',
      tag: 'Changed tag',
      user: '63ce1602468a14bdc00df47d',
      date: '1674534739603',
      __v: 0,
    },
    {
      _id: '63d0afc3abcda05588fecae5',
      title: 'test 2',
      description: 'delete me!',
      tag: 'General',
      user: '63ce1602468a14bdc00df47d',
      date: '1674620867205',
      __v: 0,
    },
  ]
  const [notes, setNotes] = useState(notesInitial)
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {children}
    </NoteContext.Provider>
  )
}

export default NoteState
