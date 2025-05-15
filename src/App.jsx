import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Product from './pages/Product'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={HomePage}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/product' Component={Product}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
