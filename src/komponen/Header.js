import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";
import { auth } from "../firebase";
import "./styles.css";;

export default function Header() {
return (
	<AppBar position="static" color='transparent'>
		<Toolbar>
		{/*Inside the IconButton, we
		can render various icons*/}
		<IconButton
			size="large"
			edge="start"
			color="inherit"
			aria-label="menu"
			sx={{ mr: 2 }}
		>
			{/*This is a simple Menu
			Icon wrapped in Icon */}
			
		</IconButton>
		{/* The Typography component applies
		default font weights and sizes */}

		<Typography variant="h6"
			component="div" sx={{ flexGrow: 1 }}>
			<h2 className="Login"> Talk With Us</h2>
			<h6 className="Login"> Created by Isa Ahmad</h6>
		</Typography>
		<Button  color='inherit' size='small' variant='outlined' onClick={() => auth.signOut()}><h5 className="Login" >Sign Out</h5></Button>
		</Toolbar>
	</AppBar>
);
}
