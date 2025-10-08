import React from 'react'

const Login = () => {
  return (
    <div className='form-container h-screen w-full flex justify-center items-center bg-gray-200'>
        <div className='form-wrapper flex flex-col gap-4 bg-white p-8 rounded-lg shadow-lg justify-center items-center p-60px w-3/12'>
            <span className='logo'>MyChat</span>
            <span className='title'>Login</span>
            <form className='flex flex-col gap-4 w-10/12'>
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400 transition">Log In</button>
            </form>
            <p>Don't have an account? Sign Up</p>
        </div>
    </div>
  )
}

export default Login