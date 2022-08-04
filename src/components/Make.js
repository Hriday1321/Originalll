import React from 'react'

export default function Make() {
  const [word, makeWord] = React.useState('initial');

  return (
    <div className='make'>
      <input type='text' placeholder='Enter Text' onChange={ (e) => {makeWord(e.target.value)}}></input>
      {word}
    </div>
  )
}
