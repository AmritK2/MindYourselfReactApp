import React from 'react';
import {Button} from '@myob/myob-widgets';
import {MYOBLogo} from '@myob/myob-widgets';

import "../index.css";
import { Link } from 'react-router-dom';

export default class Home extends React.Component{
render(){
// put me to sleep!!!
    return(<div>
        <div className="logo-header"><MYOBLogo/></div>
        <div className = "welcomeTitle" ><h1>Welcome Aboard!</h1></div>
        <div className = "getStarted"> 
        <Link to={"/register"}>
            <Button className="getStartedButton" type="primary">Get Started</Button>
        </Link>
        </div>
        </div>
        );
    }
}

