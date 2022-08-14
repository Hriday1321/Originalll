import React from 'react'
import Nav from './Nav'

export default function Guess(props) {
  const [word, makeWord] = React.useState('initial');
  const [g, makeg] = React.useState(0);
  const compare = () => {
    let arr = [0, 0, 0, 0, 0];
    let count = 0
    for(let i = 0; i < 5; i++)
      if(word[i] === props.words[i]){
        arr[i] = 1;
        count++;
      }
    makeg(count)
    for(let i = 0; i < 5; i++){
      for(let j = 0; j < 5; j++){}
    }
  }

  return (
    <div className='guess'>
      <Nav />
      <input type='text' placeholder='Enter Text' onChange={ (e) => {makeWord(e.target.value)}}></input>
      <button onClick={() => {compare()}}>Submit</button>
      {word} <br />
      {g}
    </div>
  )
}
