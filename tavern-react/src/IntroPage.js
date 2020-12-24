import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%'
    },
    button: {
        left: '50%',
        top: '50%'
    }
}));

function IntroPage(props) {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Button className={classes.button} variant='outlined' color='secondary'>Enter</Button>
        </div>
    );
}

export default IntroPage;