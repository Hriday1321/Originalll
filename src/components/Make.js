import React from 'react'
import { Link } from 'react-router-dom'
export default function Make(props) {
  const [word, makeWord] = React.useState('initial');

  return (
    <div className='make'>
      <div className='inputs'>
        <input type='text' placeholder='Enter Text' onChange={ (e) => {makeWord(e.target.value)}}></input>
        <button onClick={() => {props.set(word)}}>Submit</button>
      </div>
      <div className='link'>
        <Link to={'/'}>Home</Link>
      </div>
      {word} <br /> {props.words}
    </div>
  )
}
