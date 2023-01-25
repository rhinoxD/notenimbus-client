import React from 'react'

const NoteItem = ({ note }) => {
  return (
    <div className='col-md-3'>
      <div class='card my-2'>
        <div class='card-body'>
          <h5 class='card-title'>{note.title}</h5>
          <p class='card-text'>{note.description}</p>
          <button class='btn btn-info'>Edit</button>
          <button class='btn btn-danger ms-2'>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default NoteItem
