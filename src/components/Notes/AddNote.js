import { useContext, useState, useRef } from 'react'

import NoteContext from '../../context/notes/NoteContext'

const AddNote = () => {
  const context = useContext(NoteContext)
  const { addNote } = context
  const [note, setNote] = useState({
    title: '',
    description: '',
    tag: 'General',
  })
  const val = useRef(null)
  const val2 = useRef(null)

  const onChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    })
    if (note.title.length < 2) {
      val.current.classList.remove('d-none')
      val.current.classList.add('d-block')
    } else {
      val.current.classList.remove('d-block')
      val.current.classList.add('d-none')
    }
    if (e.target.name === 'description') {
      if (note.description.length < 4) {
        val2.current.classList.remove('d-none')
        val2.current.classList.add('d-block')
      } else {
        val2.current.classList.remove('d-block')
        val2.current.classList.add('d-none')
      }
    }
  }
  const handleClick = (e) => {
    e.preventDefault()
    addNote(note.title, note.description, note.tag)
    setNote({ title: '', description: '', tag: 'General' })
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
            // placeholder='Enter Title'
            onChange={onChange}
            value={note.title}
            minLength={3}
            required
          />
          <p className='text-danger d-none' ref={val}>
            Enter atleast 3 characters
          </p>
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            className='form-control'
            id='description'
            name='description'
            // placeholder='Description...'
            onChange={onChange}
            value={note.description}
            minLength={5}
            required
          />
          <p className='text-danger d-none' ref={val2}>
            Enter atleast 5 characters
          </p>
        </div>
        <div className='form-group'>
          <label htmlFor='tag'>Tag</label>
          <input
            type='text'
            className='form-control'
            id='tag'
            name='tag'
            placeholder='Tag'
            onChange={onChange}
            value={note.tag}
          />
        </div>
        <button
          type='submit'
          className='btn btn-primary mt-2'
          onClick={handleClick}
          disabled={note.title.length < 3 || note.description.length < 5}
        >
          Add Note
        </button>
      </form>
    </div>
  )
}

export default AddNote
