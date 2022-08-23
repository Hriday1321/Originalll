import React from 'react'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from './firebase'
import Nav from './Nav'

function Id() {
    const [words, setWords] = React.useState([]);

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
        <div>
            <Nav />
        </div>
    )
}

export default Id