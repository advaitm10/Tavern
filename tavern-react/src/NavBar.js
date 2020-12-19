import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        marginRight: {
            marginRight: theme.spacing(2)
        }
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
            <AppBar className={classes.appBar} position = 'static'>
                <Toolbar>
                    <Link className={classes.title} href = "#" onClick = {preventDefault} color = "inherit">
                        Tavern
                    </Link>
                    <Button color="inherit">
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;