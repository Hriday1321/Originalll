import React from 'react'
import Nav from './Nav'
export default function Make(props) {
  const [word, makeWord] = React.useState('initial');
  const update = () => {
    if(word.length === 5)
        props.set(word)
  }
  return (
    <div className='make'>
      <Nav />
      <div className='inputs'>
        <input type='text' placeholder='Enter Text' onChange={ (e) => {makeWord(e.target.value)}}></input>
        <button onClick={() => {update()}}>Submit</button>
      </div>
      {word} <br /> {props.words}
    </div>
  )
}
