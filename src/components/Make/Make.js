import React from 'react'
import Home from '../Home/Home'
import {db} from '../firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'
import { Input, Inputs, Button } from "./Make.elements"


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
      <Home />
      <Inputs>
        <Input type='text' placeholder='Enter Text' onChange={ (e) => {makeWord(e.target.value)}}></Input>
        <Button onClick={() => {update()}}>Submit</Button>
      </Inputs>
      {word} <br />
      {id}
    </div>
  )
}
