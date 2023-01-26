import { useContext, useEffect, useRef, useState } from 'react'

import NoteContext from '../../context/notes/NoteContext'
import AddNote from './AddNote'
import NoteItem from './NoteItem'

const Notes = () => {
  const context = useContext(NoteContext)
  const { notes, fetchNotes, editNote } = context
  const ref = useRef(null)
  const refClose = useRef(null)
  const [note, setNote] = useState({
    id: '',
    eTitle: '',
    eDescription: '',
    eTag: '',
  })

  useEffect(() => {
    fetchNotes()
    // eslint-disable-next-line
  }, [])

  const onChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    })
  }
  const handleClick = (e) => {
    e.preventDefault()
    editNote(note.id, note.eTitle, note.eDescription, note.eTag)
    refClose.current.click()
  }

  const updateNote = (currentNote) => {
    ref.current.click()
    setNote({
      id: currentNote._id,
      eTitle: currentNote.title,
      eDescription: currentNote.description,
      eTag: currentNote.tag,
    })
  }

  return (
    <>
      <AddNote />
      <button
        type='button'
        className='btn btn-primary'
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'
        ref={ref}
        hidden
      >
        Launch demo modal
      </button>
      <div
        className='modal fade'
        id='exampleModal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Edit Note
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body py-0'>
              <form className='my-3'>
                <div className='form-group my-3'>
                  <label htmlFor='title' className='mb-1'>
                    Title
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='eTitle'
                    name='eTitle'
                    aria-describedby='title'
                    placeholder='Enter Title'
                    onChange={onChange}
                    value={note.eTitle}
                  />
                </div>
                <div className='form-group my-3'>
                  <label htmlFor='description' className='mb-1'>
                    Description
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='eDescription'
                    name='eDescription'
                    placeholder='Description...'
                    onChange={onChange}
                    value={note.eDescription}
                  />
                </div>
                <div className='form-group my-3'>
                  <label htmlFor='tag' className='mb-1'>
                    Tag
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='eTag'
                    name='eTag'
                    placeholder='Tag'
                    onChange={onChange}
                    value={note.eTag}
                  />
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
                ref={refClose}
              >
                Close
              </button>
              <button
                type='button'
                className='btn btn-primary'
                onClick={handleClick}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='row my-4'>
        <h1>Your Notes</h1>
        {notes.map((note) => {
          return <NoteItem note={note} key={note._id} updateNote={updateNote} />
        })}
      </div>
    </>
  )
}

export default Notes
