import React from 'react';
import {Button} from '@myob/myob-widgets';
import {MYOBLogo} from '@myob/myob-widgets';
import "../index.css";
import UsernameForm from './UsernameForm.jsx';

export default class RegisterButtons extends React.Component{
   
    constructor(props) {
        super(props);
        this.state = {
            showUsernameForm: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        event.preventDefault();
        this.setState({...this.state, showUsernameForm: true});
    }


    render() {
        const showForm = this.state.showUsernameForm ? <div style={{textAlign: 'center'}}>
        <UsernameForm/>
        </div> : "";

        return (
            <div>
                <div className="logo-header"><MYOBLogo/></div>
                <div className = "button-intern"><Button type="primary" onClick={this.handleClick}>Intern Pack</Button> </div>
                <div className = "button-grad"><Button type="primary" onClick={this.handleClick}>Grad Pack </Button> </div>
                {showForm}
            </div>
        );
    }
}
