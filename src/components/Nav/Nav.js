import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
        <div className='home'>
            <Link to={'/'}>Home</Link>
        </div>
        <div className="make">
          <Link to={'/make'}>Make word</Link>
        </div>
        <div className="guess">
          <Link to={'/guess'}>Guess word</Link>  
        </div>
    </div>
  )
}
