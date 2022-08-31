import React from 'react'
import {db} from './../firebase'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import Home from '../Home/Home'
import Guess from './Guess'

function Id() {
    const [words, setWords] = React.useState([]);
    const [word, setWord] = React.useState('');
    const [id, makeID] = React.useState('');

    React.useEffect(() => {
        const q = query(collection(db, 'words'), orderBy('created', 'desc'))
        onSnapshot(q, (querySnapshot) => {
          setWords(querySnapshot.docs.map(doc => ({
            id: doc.id,
            word: doc.data().word
          })))
        })
    },[])

    const get = () => {
        words.forEach(function (item) {
            if(item.id === id){
                setWord(item.word);
            }
        })
    }

    if(word === '')
      return (
        <div>
            <Home />
            <input type='text' placeholder='Enter Text' onChange={ (e) => {makeID(e.target.value)}}></input>
            <button onClick={() => {
                get();
            }}>Submit
            </button>
            {words.map(function(data) {
            return (<li>{data.id}</li>);
            })}
        </div>
      )
    else
      return (
        <div>
            <Home />
            <Guess word={word}/>
        </div>
      )
}

export default Id