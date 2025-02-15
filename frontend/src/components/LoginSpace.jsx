import React , {useState, useContext} from 'react'
import {NavLink, useNavigate } from 'react-router';
import  userContext  from '../contexts/userContext';
import Msg from './Msg';

const LoginSpace = ({useCase}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();
    const { user , setuser, users , setusers } = useContext(userContext);
    const [msg, setMsg] = useState(false);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if ( useCase === 'Sign up') {
          console.log("signed up with", email, password);
          const newuser = { email: email, password: password, isLoggedIn: false };
          setuser(newuser); 
          const updatedUsers = [...users, newuser];
          setusers(updatedUsers);
          localStorage.setItem('users', JSON.stringify(updatedUsers));
          navigate('/signin');
        } else {
          console.log("Logging in with", email, password);
          const usersArr = JSON.parse(localStorage.getItem('users')) || [];
          console.log(usersArr);  
          const foundUser = usersArr.find(user => user.email === email && user.password === password);
          
          if (foundUser) {
            console.log("logged in");
            const loggedInUser = { ...foundUser, isLoggedIn: true };
            setuser(loggedInUser);
            if (rememberMe) {
              localStorage.setItem('user', JSON.stringify(loggedInUser));
            }
            navigate('/browse');
          }else{
            console.log("Invalid email or password");
            setMsg(true);
            setTimeout(() => {
              setMsg(false);
            }, 3000);
          }
        }
        setEmail("");
        setPassword("");
    };


  return (
    <>
    <div className='flex flex-col gap-5 items-center self-center justify-self-center h-auto w-[25vw] bg-[#141414]  rounded-xl p-5 shadow-[0_0_1rem] shadow-gray-600 text-white'>
        <h2 className="text-3xl font-bold mt-4 mb-3">{useCase}</h2>
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
            {useCase}
          </button>
        </form>
        <div className="flex items-center gap-2 w-[90%]">
       {(useCase === "Sign in") &&  <label className="flex items-center">
          <input type="checkbox" className="mr-2" onChange={(e) => setRememberMe(e.target.checked)} /> Remember me
        </label>}
        </div>
        {msg && <div className="w-full">
              <Msg />
          </div>}
       {(useCase === "Sign in") ? ( <div className="mt-6 text-sm">
          <span className="text-gray-400">New to Netflix? </span>
          <NavLink to="/signup" className="text-white hover:underline">Sign up now</NavLink>
        </div>) : ( <div className="mt-6 text-sm">
          <span className="text-gray-400">Already have an account? </span>
          <NavLink to="/signin" className="text-white hover:underline">Sign in</NavLink>
        </div>)}
    </div>
    </>
  )
}

export default LoginSpace