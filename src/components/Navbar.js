import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  let location = useLocation()
  const [isHover, setIsHover] = useState(false)
  const [isHover2, setIsHover2] = useState(false)
  const handleMouseEnter = () => setIsHover(true)
  const handleMouseLeave = () => setIsHover(false)
  const handleMouseEnter2 = () => setIsHover2(true)
  const handleMouseLeave2 = () => setIsHover2(false)

  return (
    <nav className='navbar navbar-expand-lg bg-dark navbar-dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          NoteNimbus
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link
                className={`nav-link ${
                  location.pathname === '/' ? 'active' : ''
                }  `}
                aria-current='page'
                to='/'
              >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={`nav-link ${
                  location.pathname === '/about' ? 'active' : ''
                }  `}
                to='/about'
              >
                About
              </Link>
            </li>
          </ul>
          <form className='d-flex' role='search'>
            <Link
              className='btn  mx-1'
              to='/login'
              role='button'
              style={{ backgroundColor: `${isHover ? '#715fd3' : '#7B68EE'}` }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Login
            </Link>
            <Link
              className='btn mx-1'
              role='button'
              to='/signup'
              style={{ backgroundColor: `${isHover2 ? '#715fd3' : '#7B68EE'}` }}
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              Signup
            </Link>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
