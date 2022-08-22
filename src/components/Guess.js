import React from 'react'
import Nav from './Nav'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from './firebase'

export default function Guess() {
  const [word, makeWord] = React.useState('initial');
  const [g, makeg] = React.useState(0);
  const [y, makey] = React.useState(0);

  const compare = () => {
    let arr = [0, 0, 0, 0, 0];
    let count = 0
    for(let i = 0; i < 5; i++)
      if(word[i] === words[0].word[i]){
        arr[i] = 1;
        count++;
      }
    
    makeg(count);
    count = 0;
    let barr = [...arr];

    for(let i = 0; i < 5; i++){
      if(arr[i] === 0)
        for(let j = 0; j < 5; j++){
          if(barr[j] === 0 && word[i] === words[0].word[j]){
            barr[j] = 1;
            count++;
          }
        }
    }

    makey(count);
    count = 0;
  }

  const [words, setWords] = React.useState([])

  React.useEffect(() => {
    const q = query(collection(db, 'words'), orderBy('created', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      setWords(querySnapshot.docs.map(doc => ({
        id: doc.id,
        word: doc.data().word
      })))
    })
  },[])

  return (
    <div className='guess'>
      <Nav />
      <input type='text' placeholder='Enter Text' onChange={ (e) => {makeWord(e.target.value)}}></input>
      <button onClick={() => {compare()}}>Submit</button>
      {word} <br />
      {g} <br />
      {y}
    </div>
  )
}