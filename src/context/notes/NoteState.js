import { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = ({ children }) => {
  const s1 = {
    name: 'Someone',
    class: 'Some class',
  }
  const [state, setState] = useState(s1)
  const update = () => {
    setTimeout(() => {
      setState({
        name: 'Someone Else',
        class: '3b',
      })
    }, 2000)
  }
  return (
    <NoteContext.Provider value={{ state, update }}>
      {children}
    </NoteContext.Provider>
  )
}

export default NoteState
