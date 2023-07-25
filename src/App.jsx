import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tasks from './Components/Tasks'
import Edittask from './Components/Edittask'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>


    <Routes>
      <Route path='/' element={<Tasks />} />
      <Route path='/edit/:id'  element={<Edittask/>} />


    </Routes>
      
    </>
  )
}

export default App
