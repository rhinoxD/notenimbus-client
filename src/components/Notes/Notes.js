import { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import NoteContext from '../../context/notes/NoteContext'
import AddNote from './AddNote'
import NoteItem from './NoteItem'

const Notes = ({ showAlert }) => {
  const navigate = useNavigate()
  const context = useContext(NoteContext)

  const { notes, fetchNotes, editNote } = context

  const ref = useRef(null)
  const refClose = useRef(null)
  const val = useRef(null)
  const val2 = useRef(null)

  const [note, setNote] = useState({
    id: '',
    eTitle: '',
    eDescription: '',
    eTag: '',
  })

  useEffect(() => {
    if (localStorage.getItem('auth-token')) {
      fetchNotes()
    } else {
      navigate('/login')
    }
    // eslint-disable-next-line
  }, [navigate])

  const onChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    })

    if (e.target.name === 'eTitle') {
      if (note.eTitle.trim().length < 2) {
        val.current.classList.remove('d-none')
        val.current.classList.add('d-block')
      } else {
        val.current.classList.remove('d-block')
        val.current.classList.add('d-none')
      }
    }

    if (e.target.name === 'eDescription') {
      console.log(note.eDescription.trim().length)
      if (note.eDescription.trim().length < 4) {
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

    editNote(note.id, note.eTitle, note.eDescription, note.eTag)

    refClose.current.click()

    showAlert('Note updated successfully.', 'info')
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
      <AddNote showAlert={showAlert} />

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
                    onChange={onChange}
                    value={note.eTitle}
                    minLength={3}
                    required
                  />
                  <p className='text-danger d-none' ref={val}>
                    Enter at least 3 characters
                  </p>
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
                    onChange={onChange}
                    value={note.eDescription}
                    minLength={5}
                    required
                  />
                  <p className='text-danger d-none' ref={val2}>
                    Enter at least 5 characters
                  </p>
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
                disabled={
                  note.eTitle.trim().length < 3 ||
                  note.eDescription.trim().length < 5 ||
                  note.eTag.trim().length === 0
                }
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='row my-4' style={{marginLeft: '0.1rem'}}>
        <h1>Your Notes</h1>
        <div className='container mx-1'>
          {notes.length === 0 && 'No notes to display'}
        </div>
        {notes.map((note) => {
          return (
            <NoteItem
              note={note}
              key={note._id}
              updateNote={updateNote}
              showAlert={showAlert}
            />
          )
        })}
      </div>
    </>
  )
}

export default Notes
