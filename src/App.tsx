import React, { useRef, useState } from 'react'
import './App.css'

import NavBar from './components/NavBar'
import Main from './components/Main'

interface props {
  searchBarToggle?: boolean
}

const App: React.FC<props> = () => {
  return (
    <div>
      <NavBar />
      <Main />
    </div>
  )
}

export default App
