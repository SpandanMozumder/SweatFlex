import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Discover from './pages/Discover'
import Search from './pages/Search'
import BodyPart from './pages/BodyPart'
import Equipment from './pages/Equipment'
import Target from './pages/Target'
import Navbar from './components/Navbar'
import { ThemeProvider } from './contexts/theme-context'

const App = () => {
  return (
    <ThemeProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/discover' element={<Discover />} />
      <Route path='/search' element={<Search />} />
      <Route path='/bodypart' element={<BodyPart />} />
      <Route path='/equipment' element={<Equipment />} />
      <Route path='/target' element={<Target />} />      
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App