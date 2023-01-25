const NoteItem = ({ note }) => {
  return (
    <div className='col-md-3'>
      <div className='card my-2'>
        <div className='card-body'>
          <h5 className='card-title'>{note.title}</h5>
          <p className='card-text'>{note.description}</p>
          <button className='btn btn-info'>
            <i className='fa-regular fa-pen-to-square'></i>
          </button>
          <button className='btn btn-danger ms-2'>
            <i className='fa-solid fa-trash'></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NoteItem
