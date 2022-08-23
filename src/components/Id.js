import React from 'react'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from './firebase'
import Nav from './Nav'
import Guess from './Guess'

function Id() {
    const [words, setWords] = React.useState([]);
    const [word, setWord] = React.useState('');
    const [id, makeID] = React.useState('');
    const [loaded, setLoaded] = React.useState(0);

    React.useEffect(() => {
        const q = query(collection(db, 'words'), orderBy('created', 'desc'))
        onSnapshot(q, (querySnapshot) => {
          setWords(querySnapshot.docs.map(doc => ({
            id: doc.id,
            word: doc.data().word
          })))
        })
    },[])

    const compare = () => {
        words.map(function(data) {
            if(data.id === id){
                setWord(data.word);
                setLoaded(1);
            }
            return 0;
        })
    }

    if(loaded === 0)
      return (
        <div>
            <Nav />
            <input type='text' placeholder='Enter Text' onChange={ (e) => {makeID(e.target.value)}}></input>
            <button onClick={() => {
                compare();
            }}>Submit
            </button>
        </div>
      )
    else
      return (
        <div>
            <Nav />
            <Guess word={word}/>
        </div>
      )
}

export default Id