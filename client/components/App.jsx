
import React from 'react';
import {Button} from '@myob/myob-widgets';
import {MYOBLogo} from '@myob/myob-widgets';
import {BrowserRouter, Route} from 'react-router-dom';

import "../index.css";
import InternAndGradPackOption from './Intern&GradPackOption.jsx';
import WelcomePage from './WelcomePage.jsx';
import DashboardForLevels from './DashboardForLevels.jsx';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <div>
                <Route exact path="/" component={WelcomePage}/>
                <Route exact path="/register" component={InternAndGradPackOption}/>
                <Route exact path="/dashboard" component={DashboardForLevels}/>
            </div>    
            </BrowserRouter>
        );
    }
}
export default App;