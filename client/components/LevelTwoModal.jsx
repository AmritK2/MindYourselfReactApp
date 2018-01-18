import React from 'react';

import "../index.css";
import { Modal } from '@myob/myob-widgets';
import { Button } from '@myob/myob-widgets';
import { MYOBLogo } from '@myob/myob-widgets';
import {Checkbox} from '@myob/myob-widgets';
import codeSchoolData from './CodeSchoolData.jsx';

export default class LevelTwoModal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           isModalOpen: true,

        };
        this.handleToggle = this.handleToggle.bind(this);
    }


    handleToggle(event){
        event.preventDefault();
        this.setState({...this.setState, isModalOpen:!this.state.isModalOpen});
    }
    
    render(){
        if (!this.state.isModalOpen) {
            return <span/>;
          }
        let classyLabel = "Keeping It Classy With C#";
        let gitRealLabel = "Git Real";
        let roadTrip1Label = "JavaScript Road Trip Part 1";
         return(
            <div>
               <Modal title="Level Two" size="medium" onCancel = {this.handleToggle} >
               <Modal.Body>
                   <h1> Complete the following to complete Level 2: </h1>
                   <Checkbox name = "cSharp"
                       label =  {classyLabel}
                       checked = {codeSchoolData(classyLabel)}/>
                   <Checkbox name = "gitReal"
                             label =  {gitRealLabel}
                             checked = {codeSchoolData(gitRealLabel)}/>
                   <Checkbox name = "jsRoadtrip1"
                             label =  {roadTrip1Label}
                             checked = {codeSchoolData(roadTrip1Label)}/>
                   <Checkbox name = "cwChalleges"
                       label =  "Complete 2 challenges in Code CodeWars"/>
               </Modal.Body>
           </Modal>
            </div>
        );
    }
}
