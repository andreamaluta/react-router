import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Actors from './pages/actors/Actors'
import DetailActor from './pages/actors/DetailActor'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={HomePage}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/actors'>
            <Route index Component={Actors}></Route>
            <Route path=':id' Component={DetailActor}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
