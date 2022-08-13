import React from 'react'
import Nav from './Nav'

export default function Guess() {
  return (
    <div className='guess'>
      <Nav />
      <input type='text' placeholder='Enter Code'></input>
    </div>
  )
}
