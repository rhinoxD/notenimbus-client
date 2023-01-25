import { useContext, useEffect } from 'react'

import NoteContext from '../../context/notes/NoteContext'
import AddNote from './AddNote'
import NoteItem from './NoteItem'

const Notes = () => {
  const context = useContext(NoteContext)
  const { notes, fetchNotes } = context

  useEffect(() => {
    fetchNotes()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <AddNote />
      <div className='row my-4'>
        <h1>Your Notes</h1>
        {notes.map((note) => {
          return <NoteItem note={note} key={note._id} />
        })}
      </div>
    </>
  )
}

export default Notes
