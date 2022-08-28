import React from 'react'

export default function Guess(props) {
  const [word, makeWord] = React.useState('initial');
  const [w, setw] = React.useState([]);

  const compare = () => {
    let arr = [0, 0, 0, 0, 0];
    let count = 0
    for(let i = 0; i < 5; i++)
      if(word[i] === props.word[i]){
        arr[i] = 1;
        count++;
      }
    let county = 0;
    let barr = [...arr];

    for(let i = 0; i < 5; i++){
      if(arr[i] === 0)
        for(let j = 0; j < 5; j++){
          if(barr[j] === 0 && word[i] === props.word[j]){
            barr[j] = 1;
            county++;
          }
        }
    }
    setw([...w, {word: word, g: count, y: county}])
  }

  return (
    <div className='guess'>
      <input type='text' placeholder='Enter Text' onChange={ (e) => {makeWord(e.target.value)}}></input>
      <button onClick={() => {
        if(word.length === 5)
          compare();
        }}>Submit</button>
      {w.map(function(data){
         return (<li>{data.word}  {data.g}  {data.y}</li>)
       })}
    </div>
  )
}