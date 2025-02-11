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
  const [user , setuser] = useState(localStorage.getItem('user')  || {
    email: '',
    password: '',
    isLoggedIn: false
  })


  

  console.log(user.isLoggedIn)
  return (
    <BrowserRouter>
      {user.isLoggedIn && <Navbar user= {user} />} 
      
      <Routes>
        <Route path="/" element={!user.isLoggedIn && (<Navigate to="/login" />)} />
        {!user.isLoggedIn && <Route path="/login" element={<Login setuser = {setuser} />} />}
        <Route path="/browse" element={<Home />} />
        <Route path="/TV" element={<Tvshows />} />
        <Route path="/Movies" element={<Movies />} />
        {/* {!isLoggedIn ? (
          <>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Navigate to="/browse" />} />
            <Route path="/browse" element={<Home />} />
            <Route path="/TV" element={<Tvshows />} />
            <Route path="/Movies" element={<Movies />} />
          </>
        )} */}
      </Routes>

      {user.isLoggedIn && <Footer />} 
    </BrowserRouter>
  )
}

export default App
