import React from 'react'
import LoginSpace from '../components/LoginSpace';


function Login({useCase}) {
 

  return (
    <>
    <div className='w-screen bg-[url(/images/login_background.jpg)] bg-no-repeat bg-cover  bg-[#141414] h-screen flex items-center justify-center'></div>
      <div className='absolute top-0 left-0 w-screen h-screen bg-[#14141499] flex items-center justify-center'>
        <LoginSpace useCase = {useCase}/>
      </div>
    </>
  )
}

export default Login

