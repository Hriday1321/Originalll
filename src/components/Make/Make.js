import React from 'react'
import Nav from '../Nav/Nav'
import {db} from '../firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'


export default function Make() {
  const [word, makeWord] = React.useState('initial');
  const [id, makeId] = React.useState(0);
  const update = async () => {
    if(word.length === 5){
      try {
        await addDoc(collection(db, 'words'), {
          word: word,
          created: Timestamp.now()
        })
        .then(function(docRef) {
          makeId(docRef.id);
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
      {word} <br />
      {id}
    </div>
  )
}
