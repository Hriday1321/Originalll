import React from 'react'
import Nav from './Nav'
import {db} from './firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'


export default function Make(props) {
  const [word, makeWord] = React.useState('initial');
  const update = async () => {
    if(word.length === 5){
      props.set(word);
      try {
        await addDoc(collection(db, 'words'), {
          word: word,
          created: Timestamp.now()
        })
      } catch (err) {
        alert(err)
      }
    }
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
