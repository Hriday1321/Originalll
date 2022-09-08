import React from 'react'
import { Cont, Letter, Div } from './Guess.elements'

export default function Guess(props) {
  const [word, makeWord] = React.useState('');
  const [w, setw] = React.useState([]);
  const empty = Array.from(Array(5 - word.length))

  const compare = React.useCallback(() => {
    let arr = [0, 0, 0, 0, 0];
    let count = 0;
    for(let i = 0; i < 5; i++)
      if(word[i].toUpperCase() === props.word[i].toUpperCase()){
        arr[i] = 1;
        count++;
      }
    let county = 0;
    let barr = [...arr];

    for(let i = 0; i < 5; i++){
      if(arr[i] === 0)
        for(let j = 0; j < 5; j++){
          if(barr[j] === 0 && word[i].toUpperCase() === props.word[j].toUpperCase()){
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
    <Div className='guess'>    
      {w.map(function(data){
         return (<Cont>
         {data.word.split('').map(function(l){
          return (<Letter>{l}</Letter>)
         })}
         <Letter>{data.g}</Letter>  
         <Letter>{data.y}</Letter></Cont>)
       })}
       <Cont>
        {word.split('').map(function(data){
          return (<Letter>{data}</Letter>)
        })}
        {empty.map(function(){
          return (<Letter> </Letter>)
        })}
        <Letter> </Letter>
        <Letter> </Letter>
       </Cont>
    </Div>
  )
}