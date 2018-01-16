import React from 'react';

import "../index.css";
import { Modal } from '@myob/myob-widgets';
import { Button } from '@myob/myob-widgets';
import { MYOBLogo } from '@myob/myob-widgets';
import {Checkbox} from '@myob/myob-widgets';

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          //chosenLevel1: false,
            isModal1Open: false,
            isModal2Open: false
        };
        //this.handleLevelOneClick = this.handleLevelOneClick.bind(this);
        this.handleToggle1 = this.handleToggle1.bind(this);
        this.handleToggle2 = this.handleToggle2.bind(this);
    }
    // handleLevelOneClick(event){
    //     event.preventDefault();
    //     this.setState({...this.state, chosenLevel1: true});
    // }

    handleToggle1(event){
        event.preventDefault();
        this.setState({...this.setState, isModal1Open: !this.state.isModal1Open} );
    }

    handleToggle2(event){
        event.preventDefault();
        this.setState({...this.setState, isModal2Open: !this.state.isModal2Open} );
    }

    render() {

        const modalOne = this.state.isModal1Open ? <div style={{textAlign: 'center'}}>
        <Modal title="Level One" size="medium" onCancel = {this.handleToggle1} >
                    <Modal.Body>
                       <h1> Complete the following to complete Level 1: </h1>
                        <Checkbox name = "chkBox1"
                         label =  "Try Git Course from Code School"/>
                        <Checkbox name = "chkBox2"
                          label = "Try C# Course from Code School" />
                        <Checkbox name = "chkBox3"
                          label = "Complete 2 challenges in Code CodeWars " />
                        <Checkbox name = "chkBox4"
                          label = "Finish the PaySlip Kata" />
                    </Modal.Body>
                </Modal>
        </div> : "";

        const modalTwo = this.state.isModal2Open ? <div style={{textAlign: 'center'}}>
        <Modal title="Level Two" size="medium" onCancel = {this.handleToggle2} >
            <Modal.Body>
                <h1> Complete the following to complete Level 2: </h1>
                <Checkbox name = "chkBox1"
                    label =  "Keeping it Classy with C# from Code School"/>
                <Checkbox name = "chkBox1"
                    label =  "Git Real Course from Code School"/>
                <Checkbox name = "chkBox1"
                   label =  "JavaScript RoadTrip Part 1 from Code School"/>
                <Checkbox name = "chkBox1"
                    label =  "Complete 2 challenges in Code CodeWars"/>
            </Modal.Body>
        </Modal>
        </div> : "";

        return (
            <div>
                <div className="logo-header"><MYOBLogo /></div>
                <div className="dashBoard"> <h1> Dashboard </h1> </div>
                <div className = "level1">
                <Button type="secondary" onClick={this.handleToggle1}>Level 1</Button> </div>
                <div className = "level2">
                <Button type="secondary" onClick={this.handleToggle2}>Level 2</Button> </div>
                {modalOne}
                {modalTwo}
            </div>
        )
    }
}

