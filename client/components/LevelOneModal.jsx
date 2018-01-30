import React from 'react';

import "../index.css";
import {Modal} from '@myob/myob-widgets';
import {Checkbox} from '@myob/myob-widgets';

import codeSchoolData from '../APICalls/CodeSchoolData.js';
import codeWarsData from '../APICalls/CodeWarsData.js';
import getCodeReviewState from '../APICalls/GithubUserData.js';
import {getUserInfo} from "../APICalls/UserService";


export default class LevelOneModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: true,
            tryGitChecked: false,
            tryCSharpChecked: false,
            checkedCompletedCWChallenges: false,
        };
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        event.preventDefault();
        this.setState({...this.setState, isModalOpen: !this.state.isModalOpen});
    }

    async componentDidMount() {
        const result = await getUserInfo();
        const numberOfChallenges = 2;
        // console.log(result);
        codeSchoolData("Try Git", (checked) => this.setState({tryGitChecked: checked}), result.codeSchoolUsername);
        codeSchoolData("Try C#", (checked) => this.setState({tryCSharpChecked: checked}), result.codeSchoolUsername);
        codeWarsData(numberOfChallenges, (checked) => this.setState({checkedCompletedCWChallenges: checked}), result.codeWarsUsername);
        getCodeReviewState("PaySlip", (checked) => this.setState({completedPaySlipKata: checked}), result.gitHubUsername);
    }

    render() {

        if (!this.state.isModalOpen) {
            return <span/>;
        }
        let gitLabel = "Try Git";
        let tryCsharpLabel = "Try C#";
        let kataChallenges = "Must have completed 2 Code Wars";
        let paySlipKata = "PaySlip Kata Finished";
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
                                  checked={this.state.checkedCompletedCWChallenges}/>
                        <Checkbox name="payslipKata"
                                  label={paySlipKata}
                                  checked={this.state.completedPaySlipKata}/>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}