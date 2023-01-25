import { useContext, useEffect, useState } from 'react'

import NoteContext from '../../context/notes/NoteContext'

const NoteItem = ({ note }) => {
  const context = useContext(NoteContext)
  const { deleteNote } = context

  const [random, setRandom] = useState(null)
  const colors = [
    '#28A745',
    '#228B22',
    '#008000',
    '#008B8B',
    '#3F00FF',
    '#007BFF',
    '#0437F2',
    '#0000FF',
    '#7B68EE',
    '#DC3545',
    '#880808',
    '#D70040',
    '#FF3131',
    '#FF0000',
    '#800000',
  ]

  useEffect(() => {
    setRandom(Math.floor(Math.random() * colors.length))
    // eslint-disable-next-line
  }, [])

  return (
    <div className='col-md-3'>
      <div className='card my-2'>
        <div className='card-body'>
          <h5 className='card-title d-flex align-items-center'>
            {note.title}
            <span
              className={`badge rounded-pill ms-2`}
              style={{
                fontSize: '0.7rem',
                backgroundColor: `${
                  note.tag === 'General' ? '#000' : colors[random]
                }`,
              }}
            >
              {note.tag}
            </span>
          </h5>
          <p className='card-text'>{note.description}</p>
          <button className='btn btn-info'>
            <i className='fa-regular fa-pen-to-square'></i>
          </button>
          <button
            className='btn btn-danger ms-2'
            onClick={() => {
              deleteNote(note._id)
            }}
          >
            <i className='fa-solid fa-trash'></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NoteItem
