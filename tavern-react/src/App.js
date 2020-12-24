import './App.css';
import { Provider } from 'react-redux'
import store from './store';

import { makeStyles } from '@material-ui/core/styles';

import NavBar from './NavBar';
import IntroPage from './IntroPage';

const useStyles = makeStyles((theme) => ({
    introPage: {
        height: '100%'
    }
}));

function App() {
    const classes = useStyles();
    return (
        <Provider store = {store}>
                <NavBar/>
                <IntroPage className={classes.introPage}/>
        </Provider>
    );
}

export default App;
