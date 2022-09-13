import React from 'react'
import {db} from './../firebase'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import Home from '../Home/Home'
import Guess from './Guess'
import {Inputs, Input, Button, List, Li, Div} from './Id.elements'

function Id() {
    const [words, setWords] = React.useState([]);
    const [word, setWord] = React.useState('');
    const [id, makeID] = React.useState(" ");

    

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
            <Div>
            <Inputs>
              <Input type='text' placeholder='Enter Text' onChange={ (e) => {makeID(e.target.value)}}></Input>
              <Button onClick={() => {
                  get();
              }}>Submit
              </Button>
            </Inputs>
            <List>
              {words.map(function(data) {
                return (<Li>{data.id}</Li>);
              })}
              <Li>Waiting on your friend? Try one of these while you wait!</Li>
            </List>
            </Div>
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