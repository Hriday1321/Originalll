import React from 'react'
import {db} from './../firebase'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import Home from '../Home/Home'
import Guess from './Guess'

function Id() {
    const [words, setWords] = React.useState([]);
    const [word, setWord] = React.useState('');
    const [id, makeID] = React.useState(" ");

    

    React.useEffect(() => {
      const handleKeyDown = (event) => {
        if((event.key >= 'a' && event.key <= 'z'))
          makeID(id.concat(event.key));
        if((event.key >= '0' && event.key <= '9'))
          makeID(id.concat(event.key));
        if((event.keyCode >= 65 && event.keyCode <= 90))
          makeID(id.concat(event.key));
        else if(event.key === 'Backspace')
          makeID(id.slice(0, -1));
      };
        const q = query(collection(db, 'words'), orderBy('created', 'desc'))
        onSnapshot(q, (querySnapshot) => {
          setWords(querySnapshot.docs.map(doc => ({
            id: doc.id,
            word: doc.data().word
          })))
        })
        window.addEventListener('keydown', handleKeyDown);
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
    },[id])

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
            {id}
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