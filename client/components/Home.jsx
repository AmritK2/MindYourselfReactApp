import React from 'react';
import {Button} from '@myob/myob-widgets';
import {MYOBLogo} from '@myob/myob-widgets';

import "../index.css";
import Usernames from './RegisterUsernames.jsx';

export default class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            loadUsername: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        event.preventDefault();
        this.setState({...this.state, loadUsername: true});
    }

render(){
    const usernameForm = this.state.loadUsername ? <div style={{textAlign: 'center'}}>
    <Usernames/>
    </div> : "";

    return(<div>
        <div className="logo-header"><MYOBLogo/></div>
        
        <h1>Welcome Aboard!</h1>
        <div> <Button type="primary" onClick={this.handleClick}>Get Started</Button></div>
            {usernameForm}
            </div>
        );
    }

}