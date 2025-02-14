import React , {useState} from 'react'
import {NavLink, useNavigate } from 'react-router';

const LoginSpace = ({setuser}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Logging in with", email, password);
        setuser({email: email, password: password, isLoggedIn: true});
        navigate('/browse');
        localStorage.setItem('user', JSON.stringify({email: email, password: password, isLoggedIn: true}));
    };


  return (
    <div className='flex flex-col gap-5 items-center h-[60vh] w-[25vw] bg-[#141414]  rounded-xl p-5 shadow-[0_0_1rem] shadow-gray-600 text-white'>
        <h2 className="text-3xl font-bold mt-4 mb-3">Sign In</h2>
        <form onSubmit={handleSubmit} className="flex w-[90%] flex-col space-y-4">
          <input
            type="email"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 bg-gray-800 rounded focus:outline-none"
            required/>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 bg-gray-800 rounded focus:outline-none"
            required/>
          <button
            type="submit"
            className="bg-red-600 p-3 rounded font-bold cursor-pointer hover:bg-red-700 transition">
            Sign In
          </button>
        </form>
        <div className="flex items-center gap-2 w-[90%]">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" /> Remember me
        </label>
        </div>
        <div className="mt-6 text-sm">
          <span className="text-gray-400">New to Netflix? </span>
          <NavLink to="/signup" className="text-white hover:underline">Sign up now</NavLink>
        </div>
    </div>
  )
}

export default LoginSpace