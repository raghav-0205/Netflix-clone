import React from 'react'
import LoginSpace from '../components/LoginSpace';

function Login({setuser}) {
 
  return (
    <>
    <div className='w-screen bg-[url(/images/login_background.jpg)] bg-no-repeat bg-cover  bg-[#141414] h-screen flex items-center justify-center'></div>
      <div className='absolute top-0 left-0 w-screen h-screen bg-[#14141489]  flex items-center justify-center'>
        <LoginSpace setuser={setuser} />
      </div>
    </>
  )
}

export default Login

