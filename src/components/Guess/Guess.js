import React from 'react'
import { Cont, Letter } from './Guess.elements'

export default function Guess(props) {
  const [word, makeWord] = React.useState('init');
  const [w, setw] = React.useState([]);

  const compare = React.useCallback(() => {
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
  }, [word, props.word, w]);

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if((event.key >= 'a' && event.key <= 'z') || (event.key >= '0' && event.key <= '9') || (event.keyCode >= 65 && event.keyCode <= 90)){
        if(word.length < 5)
          makeWord(word.concat(event.key));
      }    
      else if(event.key === 'Backspace')
        makeWord(word.slice(0, -1));
      else if(event.key === 'Enter' && word.length === 5){
        compare();
        makeWord('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [word, compare])

  return (
    <div className='guess'>
        {word.split('').map(function(data){
          return (<Letter>{data}</Letter>)
        })} <br />
      {w.map(function(data){
         return (<Cont>
         {data.word.split('').map(function(l){
          return (<Letter>{l}</Letter>)
         })}
         <Letter>{data.g}</Letter>  
         <Letter>{data.y}</Letter></Cont>)
       })}
    </div>
  )
}