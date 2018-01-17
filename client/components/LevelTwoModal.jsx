import React from 'react';

import "../index.css";
import { Modal } from '@myob/myob-widgets';
import { Button } from '@myob/myob-widgets';
import { MYOBLogo } from '@myob/myob-widgets';
import {Checkbox} from '@myob/myob-widgets';

export default class LevelTwoModal extends React.Component{
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

    handleToggle(event){
        event.preventDefault();
        this.setState({...this.setState, isModalOpen:!this.state.isModalOpen});
    }
    
    render(){
        if (!this.state.isModalOpen) {
            return <span/>;
          }
         return(
            <div>
               <Modal title="Level Two" size="medium" onCancel = {this.handleToggle} >
               <Modal.Body>
                   <h1> Complete the following to complete Level 2: </h1>
                   <Checkbox name = "cSharp"
                       label =  "Keeping it Classy with C# from Code School" 
                       onChange = {this.onCheck}
                       checked = {this.state.isChecked}/>
                   <Checkbox name = "gitReal"
                       label =  "Git Real Course from Code School"/>
                   <Checkbox name = "jsRoadtrip1"
                      label =  "JavaScript RoadTrip Part 1 from Code School"/>
                   <Checkbox name = "cwChalleges"
                       label =  "Complete 2 challenges in Code CodeWars"/>
               </Modal.Body>
           </Modal>
            </div>
        );
    }
}
