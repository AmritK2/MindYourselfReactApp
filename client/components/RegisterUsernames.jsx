import React from 'react';
import {Button} from '@myob/myob-widgets';
import {MYOBLogo} from '@myob/myob-widgets';

import "../index.css";

import Form from './Form.jsx';
import FormGrad from './FormGrad.jsx'

export default class Usernames extends React.Component{
   
    constructor(props) {
        super(props);
        this.state = {
            disableInternButton: false,
            disableGradButton: false,
        };
        this.handleInternClick = this.handleInternClick.bind(this);
        this.handleGradClick = this.handleGradClick.bind(this);
    }

    handleInternClick(event){
        event.preventDefault();
        this.setState({...this.state, disableGradButton: true, disableInternButton: false});
    }

    handleGradClick(event){
        event.preventDefault();
        this.setState({...this.state, disableInternButton: true, disableGradButton: false});
    }

    render() {
        const internForm = this.state.disableGradButton ? <div style={{textAlign: 'center'}}>
        <Form/>
        </div> : "";

        const gradForm = this.state.disableInternButton?  <div style={{textAlign: 'center'}}>
        <FormGrad/>
        </div> : "";
        return (
            <div>
                <div className="logo-header"><MYOBLogo/></div>
                <div className = "button-intern"><Button type="primary" onClick={this.handleInternClick}>Intern Pack</Button> </div>
                <div className = "button-grad"><Button type="primary" onClick={this.handleGradClick}>Grad Pack </Button> </div>
                {internForm}
                {gradForm}
            </div>
        );
    }
}