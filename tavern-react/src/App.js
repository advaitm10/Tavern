import './App.css';
import { Provider } from 'react-redux'
import store from './store';

import { makeStyles } from '@material-ui/core/styles';

import NavBar from './NavBar';
import IntroPage from './IntroPage';
import LogInPage from './LogInPage';
import RoomPage from './RoomPage';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    introPage: {
        height: '100%'
    }
}));

function App() {
    const classes = useStyles();
    return (
        <Provider store = {store}>
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route path='/'>
                        <IntroPage className={classes.introPage}/>
                    </Route>
                    <Route path='/room'>
                        <RoomPage/>
                    </Route>
                    <Route path='/logIn'>
                        <LogInPage/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
