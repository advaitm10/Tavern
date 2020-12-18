import './App.css';
import { Provider } from 'react-redux'
import store from './store';

import NavBar from './NavBar';

function App() {
    return (
        <Provider store = {store}>
            <NavBar/>
        </Provider>
    );
}

export default App;
