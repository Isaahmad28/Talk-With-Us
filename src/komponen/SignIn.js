import React from 'react'
import firebase from 'firebase/compat/app';
import { auth } from '../firebase';


function signInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider
    auth.signInWithPopup(provider)
}

export default signInWithGoogle
