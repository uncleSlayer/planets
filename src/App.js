import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Mercury from './components/Mercury'
import Venus from './components/Venus'
import Earth from './components/Earth'
import Mars from './components/Mars'
import Jupiter from './components/Jupiter'
import Satun from './components/Satun'
import Uranus from './components/Uranus'
import Neptune from './components/Neptune'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mercury" element={<Mercury />} />
        <Route path="/venus" element={<Venus />} />
        <Route path="/earth" element={<Earth />} />
        <Route path="/mars" element={<Mars />} />
        <Route path="/jupiter" element={<Jupiter />} />
        <Route path="/satun" element={<Satun />} />
        <Route path="/uranus" element={<Uranus />} /> 
        <Route path="/neptune" element={<Neptune />} />
      </Routes>
    </>
  )
}

export default App
