import React from 'react'
import Nav from './Nav'

export default function Guess(props) {
  const [word, makeWord] = React.useState('initial');
  const compare = () => {
    if(word === props.words)
      makeWord('correct')
    else 
      makeWord('wrong')
  }

  return (
    <div className='guess'>
      <Nav />
      <input type='text' placeholder='Enter Text' onChange={ (e) => {makeWord(e.target.value)}}></input>
      <button onClick={() => {compare()}}>Submit</button>
      {word}
    </div>
  )
}
