
import React from 'react';

import "../index.css";
import { Modal } from '@myob/myob-widgets';
import { Button } from '@myob/myob-widgets';
import { MYOBLogo } from '@myob/myob-widgets';
import {Checkbox} from '@myob/myob-widgets';



export default class LevelOneModal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           isModalOpen: true,
           isChecked: false
            
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.onCheck = this.onCheck.bind(this);
    }

    onCheck(){
        this.setState({...this.setState, isChecked: !this.state.isChecked});
    }

    handleToggle(){
        event.preventDefault();
        this.setState({...this.setState, isModalOpen:!this.state.isModalOpen});
    }

    render(){
        if (!this.state.isModalOpen) {
            return <span/>;
          }
      
         return(
            <div>
                <Modal title="Level One" size="medium" onCancel = {this.handleToggle} >
                <Modal.Body>
                    <h1> Complete the following to complete Level 1: </h1>
                    <Checkbox name = "tryGit"
                    label =  "Try Git Course from Code School"
                    onChange = {this.onCheck}
                    checked = {this.state.isChecked}/>
                    <Checkbox name = "tryCSharp"
                    label = "Try C# Course from Code School" />
                    <Checkbox name = "cwChallanges"
                    label = "Complete 2 challenges in Code CodeWars " />
                    <Checkbox name = "payslipKata"
                    label = "Finish the PaySlip Kata" />
                </Modal.Body>
            </Modal>
            </div>
        );
    }
}