import React, {useState, useEffect, useRef} from 'react';
import { db, auth } from '../firebase.js';
import KirimPesan from './KirimPesan.js';
import Header from './Header.js';

function Chat() {
    const scroll = useRef()
    const [pesan, aturPesan]=useState([])
    useEffect (()=>{
        db.collection('pesan').orderBy('createdAt').limit(50).onSnapshot(snapshot=>{
            aturPesan(snapshot.docs.map(doc => doc.data()))

        })

    }, [])
    return (
        <div>
            <Header />
            <div className='msgs'>
                {pesan.map(({id, text, photoURL, uid}) =>(
                    <div> 
                        <div key={id} className={`msg ${uid == auth.currentUser ? 'sent' : 'received'}`}> 
                            <img src={photoURL}alt=""/>
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <KirimPesan scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat
