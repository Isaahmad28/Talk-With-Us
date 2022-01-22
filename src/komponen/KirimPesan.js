import React from 'react'
import { useState } from 'react'
import { db, auth } from '../firebase';
import Input from '@mui/material/Input';
import firebase from 'firebase/compat/app';
import Button from '@mui/material/Button';

function KirimPesan({scroll}) {
    const [msg,setMsg] = useState('')

    async function kirimPesan(e){
        e.preventDefault()
        const {uid, photoURL} = auth.currentUser

        await db.collection('pesan').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
            
        })
        setMsg('')
        scroll.current.scrollIntoView({behavior: 'smooth'})
    }
    return (
        <div>
            <form onSubmit={kirimPesan}>
                <div className="sendMsg">
                    <Input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder='Pesan...' />
                    <Button style={{ width: '18%', fontSize: '15px', fontWeight: '550',  maxWidth: '100px'}} type="submit" color='inherit'><h4 className="Login2"> Kirim </h4></Button>
                </div>
                
            </form>
        </div>
    )
}

export default KirimPesan
