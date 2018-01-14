/*
    ./client/components/App.jsx
*/
import React from 'react';
import {Button} from '@myob/myob-widgets';
import {MYOBLogo} from '@myob/myob-widgets';
import "../index.css";

import Form from './Form.jsx';
import FormGrad from './FormGrad.jsx'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hideInternButton: false,
            hideGradButton: false,
        };
        this.handleInternClick = this.handleInternClick.bind(this);
        this.handleGradClick = this.handleGradClick.bind(this);
    }

    handleInternClick(event){
        event.preventDefault();
        this.setState({...this.state, hideGradButton: true});
    }

    handleGradClick(event){
        event.preventDefault();
        this.setState({...this.state, hideInternButton: true});
    }

    render() {
        const internForm = this.state.hideGradButton ? <div style={{textAlign: 'center'}}>
        <Form/>
        </div> : "";

        const gradForm = this.state.hideInternButton?  <div style={{textAlign: 'center'}}>
        <FormGrad/>
        </div> : "";
        return (
            <div>
                <div className="logo-header"><MYOBLogo/></div>
                <div className = "button-intern"><Button type="primary" onClick={this.handleInternClick}>Intern Pack</Button> </div>
                <div className = "button-grad"><Button type="primary"  onClick={this.handleGradClick}>Grad Pack</Button> </div>
                {internForm}
                {gradForm}
            </div>
        );
    }
}

export default App;
