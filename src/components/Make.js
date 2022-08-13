import React from 'react'
import Nav from './Nav'
export default function Make(props) {
  const [word, makeWord] = React.useState('initial');

  return (
    <div className='make'>
      <Nav />
      <div className='inputs'>
        <input type='text' placeholder='Enter Text' onChange={ (e) => {makeWord(e.target.value)}}></input>
        <button onClick={() => {props.set(word)}}>Submit</button>
      </div>
      {word} <br /> {props.words}
    </div>
  )
}
