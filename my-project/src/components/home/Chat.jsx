import React, { useState } from 'react'
import Input from "./Input"
import Message from './Message'

const Chat = ({ sidebar }) => {
  const handleInputSubmit = (message) => {
    console.log("Submitted message:", message)
  }

  return (
    <div className={
    `chat-container${sidebar ? ' shifted' : ''} w-screen justify-center items-end flex`
    }>
      <div className="chat">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <Input onSubmit={handleInputSubmit} />
    </div>
    
  )
}

export default Chat