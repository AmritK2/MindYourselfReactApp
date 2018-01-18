import React from 'react';

import "../index.css";
import {Modal} from '@myob/myob-widgets';
import {Checkbox} from '@myob/myob-widgets';

import codeSchoolData from './CodeSchoolData.jsx';

export default class LevelOneModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: true,

        };
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        event.preventDefault();
        this.setState({...this.setState, isModalOpen: !this.state.isModalOpen});
    }

    render() {

        if (!this.state.isModalOpen) {
            return <span/>;
        }
        let gitLabel = "Try Git";
        let tryCsharpLabel = "Try C#";
        return (
            <div>
                <Modal title="Level One" size="medium" onCancel={this.handleToggle}>
                    <Modal.Body>
                        <h1> Complete the following to complete Level 1: </h1>
                        <Checkbox name="tryGit"
                                  label={gitLabel}
                                  checked={codeSchoolData(gitLabel)}/>
                        <Checkbox name="tryCSharp"
                                  label={tryCsharpLabel}
                                  checked={codeSchoolData(tryCsharpLabel)}/>
                        <Checkbox name="cwChallanges"
                                  label="Complete 2 challenges in Code CodeWars "/>
                        <Checkbox name="payslipKata"
                                  label="Finish the PaySlip Kata"/>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}