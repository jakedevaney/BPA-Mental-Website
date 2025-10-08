import React from 'react'

const Message = () => {
  return (
    // model message format
    <div className="message flex">
      <div className="pfp rounded-full">
        <img src="/images/NoPFP.jpg" alt="Profile" />
      </div>
      <div>
        <div className="user">
          <b>Username</b>
        </div>
        <div className="message-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil officia quae magni quas pariatur laudantium sunt autem exercitationem facilis, dignissimos nemo eveniet, quasi minus tempore nisi, in distinctio iste nam.
        </div>
      </div>
      
    </div>
  )
}

export default Message