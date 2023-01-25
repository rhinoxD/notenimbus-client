import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import About from './components/About'
import Alert from './components/Alert'
import Home from './components/Home'
import Navbar from './components/Navbar'
import NoteState from './context/notes/NoteState'

function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Alert message={'Testing'} />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </Router>
    </NoteState>
  )
}

export default App
