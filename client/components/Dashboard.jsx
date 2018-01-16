import React from 'react';

import "../index.css";
import { Modal } from '@myob/myob-widgets';
import { Button } from '@myob/myob-widgets';
import { MYOBLogo } from '@myob/myob-widgets';

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          //chosenLevel1: false,
            isModalOpen: false
        };
        //this.handleLevelOneClick = this.handleLevelOneClick.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    // handleLevelOneClick(event){
    //     event.preventDefault();
    //     this.setState({...this.state, chosenLevel1: true});
    // }

    handleToggle(event){
        event.preventDefault();
        this.setState({...this.setState, isModalOpen: !this.state.isModalOpen} );
    }

    render() {

        const modal = this.state.isModalOpen ? <div style={{textAlign: 'center'}}>
        <Modal title="Level One" size="large" onCancel = {this.handleToggle} >
                    <Modal.Body>
                        Complete the following to complete Level 1: <br />
                        > Try Git Course from Code School <br />
                        > Try C# Course from Code School <br />
                        > Complete 2 challenges in Code CodeWars <br />
                        > Finish the PaySlip Kata <br />
                    </Modal.Body>
                </Modal>
        </div> : "";

        return (
            <div>
                <div className="logo-header"><MYOBLogo /></div>
                <div className="dashBoard"> <h1> Dashboard </h1> </div>
                <div className = "level1">
                <Button type="secondary" onClick={this.handleToggle}>Level 1</Button> </div>
                <div className = "level2">
                <Button type="secondary">Level 2</Button> </div>
                {modal}
            </div>
        )
    }
}

