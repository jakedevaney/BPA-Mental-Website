import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import Chat from './Chat'

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <div>
      {/* Top navbar */}
      <div className="navbar flex items-center justify-between px-4 py-2 text-white">
        <div className="left">
          <button 
            onClick={showSidebar} 
            className="menu-button input-button rounded-full no-bg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        <div className="right">
          <button className="input-button rounded-full no-bg" id="profile-button">
            <img src="/images/NoPFP.jpg" alt="Profile" className="w-8 h-8 rounded-full"/>
          </button>
        </div>
      </div>

      {/* Sidebar overlay */}
      <nav
        className={sidebar ? "sidebar active" : "sidebar"}>
        <ul className="nav-menu-items p-4 space-y-4">
          <li className="navbar-toggle flex justify-end">
            <button onClick={showSidebar} className="menu-button input-button rounded-full no-bg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </li>
          {Sidebar.map((item, index) => (
            <li key={index} className={item.cName}>
              <Link to={item.path} className="flex items-center gap-2">
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Give chat sidebar state */}
      <Chat sidebar={sidebar} />
    </div>
  )
}

export default Navbar
