import './App.css';
import React from 'react';
import Chat from './komponen/Chat';
import { auth } from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Masuk from './komponen/Login';


function App() {
  const [user] = useAuthState(auth)
  return (
    <>
      
      {user ? <Chat />  : <Masuk/>}
      
    </>
  );
}

export default App;
