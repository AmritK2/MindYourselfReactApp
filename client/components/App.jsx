/*
    ./client/components/App.jsx
*/
import React from 'react';
import {Button} from '@myob/myob-widgets';
import {MYOBLogo} from '@myob/myob-widgets';
import {BrowserRouter, Route} from 'react-router-dom';

import "../index.css";
import RegisterButtons from './RegisterButtons.jsx';
import Home from './Home.jsx';
import DashboardForLevels from './DashboardForLevels.jsx';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <div> 
                <Route exact path="/" component={Home}/>
                <Route exact path="/register" component={RegisterButtons}/>
                <Route exact path="/dashboard" component={DashboardForLevels}/>
            </div>    
            </BrowserRouter>
        );
    }
}

export default App;