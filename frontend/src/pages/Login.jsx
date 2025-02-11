import React from 'react'

function Login({setIsLoggedIn}) {

  return (
    <div className='w-screen bg-[url("\images\login_background.jpg")] bg-[#141414] h-screen flex items-center justify-center'>
      <div className='flex flex-col gap-5 items-center h-[60vh] w-[25vw]  border-2 border-white p-5 text-white'>
        <h1>login page</h1>
        <button onClick={()=>{setIsLoggedIn(true)}} className='border-2 cursor-pointer' >login</button>
      </div>
    </div>
  )
}

export default Login



