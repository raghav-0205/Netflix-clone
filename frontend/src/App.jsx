import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Tvshows from './pages/Tvshows'
import Movies from './pages/Movies'
import Home from './pages/home'
import Footer from './components/Footer'
import Login from './pages/Login'
import Mylist from './pages/Mylist'
import Category from './pages/Category'
import { useState } from 'react'
import userContext from './contexts/userContext'


function App() {
  const [users , setusers] = useState(JSON.parse(localStorage.getItem("users")) || []);
  const [user, setuser] = useState(JSON.parse(localStorage.getItem("user")) ||{email: "" , password: ""  , isLoggedIn : false});
 
  
  return (
    <userContext.Provider value={{user, setuser, users, setusers}}>
      <BrowserRouter>
      {user.isLoggedIn && <Navbar />} 
      
      <Routes>
        <Route path="/" element={!user.isLoggedIn ? (<Navigate to="/signup" />) : (<Navigate to="/browse" />) } />
        {!user.isLoggedIn && <Route path="/signup" element={<Login usecase={"Sign up"} />} />}
        {!user.isLoggedIn && <Route path="/signin" element={<Login usecase={"Sign in"} />} />}
        <Route path="/browse" element={<Home />} />
        <Route path="/TV" element={<Tvshows />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/my list" element={<Mylist />} />
        <Route path="/category" element={<Category/>} />
      </Routes>

      {user.isLoggedIn && <Footer />} 
      </BrowserRouter>
    </userContext.Provider>
    
  )
}

export default App
