import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import About from './components/About'
import Alert from './components/Alert'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import Home from './components/Home'
import Navbar from './components/Navbar'
import NoteState from './context/notes/NoteState'

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      message,
      type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Alert alert={alert} />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home showAlert={showAlert} />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login showAlert={showAlert} />} />
            <Route path='/signup' element={<Signup showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </NoteState>
  )
}

export default App
