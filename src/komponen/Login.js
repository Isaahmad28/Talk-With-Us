import React from "react";
import { Grid,  Button, Typography } from "@material-ui/core";
import "./styles.css";
import signInWithGoogle from "./SignIn";


export default function Masuk() {
  return (
      <>

        <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        style={{ minHeight: "100vh" }}
        spacing={10}
        >
        <Grid item>
            <h1 className="Login" >Talk With Us</h1>
        </Grid>
        <Grid item style={{ border: "2px solid gray" ,borderRadius: '16px' }}>
            <Login />
        </Grid>
            
            <h5 className="Login" >&copy; Isa Ahmad. All right reserved</h5>
        </Grid>
      </>
    
    
  );
}

const Login = () => {
  return (
    <Grid container direction="column" alignItems="center" justify="center" >
        <h4 className="Login">Selamat datang di Talk With Us</h4>
        <h4 className="Login">Platform chat app berbasi web. Dibuat menggunakan React JS</h4>
      
      <Button onClick={signInWithGoogle} size='small' variant='outlined' color='inherit'>
        <h5 className="Login">Login</h5>
      </Button>
    </Grid>
  );
};
