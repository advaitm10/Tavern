import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

function NavBar(props) {
    const loggedIn = props.logIn;
    const preventDefault = (event) => event.preventDefault();
    return (
        
        <AppBar position = 'static'>
            <Link href = "#" onClick = {preventDefault} color = "inherit">
                Tavern
            </Link>
            <Button color="inherit">
                Login
            </Button>
        </AppBar>
    );
}

export default NavBar;