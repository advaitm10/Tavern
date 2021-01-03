import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Link from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: '#363636'
    }
}));

function NavBar(props) {
    const loggedIn = props.logIn;
    const preventDefault = (event) => event.preventDefault();
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position = 'fixed'>
                <Toolbar>
                    <Link to='/'>Tavern</Link>
                    <Button color="inherit">
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;