import React from 'react';

import "../index.css";
import {Modal} from '@myob/myob-widgets';
import {Checkbox} from '@myob/myob-widgets';

import codeSchoolData from './CodeSchoolData.jsx';
import codeWarsData from './CodeWarsData.jsx';

export default class LevelOneModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: true,
            tryGitChecked: false,
            tryCSharpChecked: false,
            completedCWChallenges: false,
        };
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        event.preventDefault();
        this.setState({...this.setState, isModalOpen: !this.state.isModalOpen});
    }

    componentDidMount() {
        codeSchoolData("Try Git", (checked) => this.setState({tryGitChecked:checked}));
        codeSchoolData("Try C#", (checked) => this.setState({tryCSharpChecked:checked}));
        codeWarsData(2, (checked) => this.setState({completedCWChallenges:checked}))
    }

    render() {

        if (!this.state.isModalOpen) {
            return <span/>;
        }
        let gitLabel = "Try Git";
        let tryCsharpLabel = "Try C#";
        let kataChallenges = "Must have completed 2 Code Wars";
        return (
            <div>
                <Modal title="Level One" size="large" onCancel={this.handleToggle}>
                    <Modal.Body>
                        <h1> Complete the following to complete Level 1: </h1>
                        <Checkbox name={gitLabel}
                                  label={gitLabel}
                                  checked= {this.state.tryGitChecked}/>
                        <Checkbox name="tryCSharp"
                                  label={tryCsharpLabel}
                                  checked={this.state.tryCSharpChecked}/>
                        <Checkbox name="cwChallanges"
                                  label= {kataChallenges}
                                  checked={this.state.completedCWChallenges}/>
                        <Checkbox name="payslipKata"
                                  label="Finish the PaySlip Kata"/>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}