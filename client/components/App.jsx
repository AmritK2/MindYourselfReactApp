/*
    ./client/components/App.jsx
*/
import React from 'react';
import {Button} from '@myob/myob-widgets';
import {MYOBLogo} from '@myob/myob-widgets';
import {Route, browserHistory} from 'react-router';
import {BrowserRouter} from 'react-router-dom';

import "../index.css";

import Usernames from './RegisterUsernames.jsx';
import Home from './Home.jsx';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter history = {browserHistory}>
                <Route path = {"/"} component = {Home}>
                <Route path = {"register"} component = {Usernames}/>
                </Route>
            </BrowserRouter>
        );
    }
}

export default App;