import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Characters from './pages/characters/Characters'
import CharacterDetail from './pages/characters/CharacterDetail'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={HomePage}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/actors'>
            <Route index Component={Characters}></Route>
            <Route path=':id' Component={CharacterDetail}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
