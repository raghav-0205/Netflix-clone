import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Tvshows from './components/Tvshows'
import Movies from './components/Movies'
import Home from './pages/home'
import Footer from './components/Footer'
import Login from './pages/Login'
import { useState } from 'react'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <BrowserRouter>
      {isLoggedIn && <Navbar />} 
      
      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate to="/browse" />} />
            <Route path="/browse" element={<Home />} />
            <Route path="/TV" element={<Tvshows />} />
            <Route path="/Movies" element={<Movies />} />
          </>
        )}
      </Routes>

      {isLoggedIn && <Footer />} 
    </BrowserRouter>
  )
}

export default App
