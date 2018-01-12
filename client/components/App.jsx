/*
    ./client/components/App.jsx
*/
import React from 'react';
import {Button} from '@myob/myob-widgets';
import {MYOBLogo} from '@myob/myob-widgets';
import "../index.css";

import UserData from './Form.jsx';
import UserGradData from './FormGrad.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showUserInternDashboard: false,
            showUserGradDashboard: false,
        };
        this.handleInternSubmit = this.handleInternSubmit.bind(this);
        this.handleGradSubmit = this.handleGradSubmit.bind(this);
    }

    handleInternSubmit(event) {
        this.setState({...this.state, showUserDashboard: true});
        event.preventDefault();
    }

    handleGradSubmit(event) {
        this.setState({...this.state, showUserGradDashboard: true});
        event.preventDefault();
    }

    render() {
        const chosenInternForm = this.state.showUserDashboard ? <div style={{textAlign: 'center'}}>
            <UserData/>
        </div> : "";
        const chosenGradForm = this.state.showUserGradDashboard ? <div style={{textAlign: 'center'}}>
            <UserGradData/>
        </div> : "";

        return (
            <div className="myob">
                <MYOBLogo className = "logo"/>
                <div style={{textAlign: 'center'}}>
                    <Button  type = "primary" onClick={this.handleInternSubmit}>Intern Pack
                    </Button>
                    {chosenInternForm}
                </div>
                <div style={{textAlign: 'center'}}>
                    <Button type="primary" onClick={this.handleGradSubmit}>Grad Pack</Button>
                    {chosenGradForm}
                </div>

            </div>
        );
    }
}

export default App;

