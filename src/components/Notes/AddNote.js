import { useContext, useState } from 'react'

import NoteContext from '../../context/notes/NoteContext'

const AddNote = () => {
  const context = useContext(NoteContext)
  const { addNote } = context
  const [note, setNote] = useState({ title: '', description: '', tag: '' })

  const onChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    })
  }
  const handleClick = (e) => {
    e.preventDefault()
    addNote(note.title, note.description, note.tag)
  }
  
  return (
    <div className='container my-4'>
      <h1>Add a Note</h1>
      <form className='my-3'>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            className='form-control'
            id='title'
            name='title'
            aria-describedby='title'
            placeholder='Enter Title'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            className='form-control'
            id='description'
            name='description'
            placeholder='Description...'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='tag'>Tag</label>
          <input
            type='text'
            className='form-control'
            id='tag'
            name='tag'
            // placeholder='Tag'
            onChange={onChange}
          />
        </div>
        <button
          type='submit'
          className='btn btn-primary mt-2'
          onClick={handleClick}
        >
          Add Note
        </button>
      </form>
    </div>
  )
}

export default AddNote
