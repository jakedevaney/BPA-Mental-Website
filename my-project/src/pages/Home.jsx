import React from 'react'
import Chat from '../components/home/Chat'
import Chats from '../components/home/Chats'
import Input from '../components/home/Input'
import Message from '../components/home/Message'
import Navbar from '../components/home/Navbar'
import Search from '../components/home/Search'

export const Home = () => {
  return (
    <div className='home home-color h-screen w-screen flex flex-col'>
        <div>
            <Navbar/>
        </div>
      <div className='chat-container w-screen justify-center items-end flex'>
        <Chat/>
      </div>
    </div>
  )
}

export default Home