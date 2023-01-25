const NoteItem = ({ note }) => {
  const colors = ['primary', 'danger', 'dark']
  let random = Math.floor(Math.random() * colors.length)
  console.log(random)
  return (
    <div className='col-md-3'>
      <div className='card my-2'>
        <div className='card-body'>
          <h5 className='card-title d-flex align-items-center'>
            {note.title}
            <span
              className={`badge rounded-pill bg-${colors[random]} ms-2`}
              style={{ fontSize: '0.7rem' }}
            >
              {note.tag}
            </span>
          </h5>
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
