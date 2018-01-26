import React from 'react';
import "../index.css";
import {Modal} from '@myob/myob-widgets';
import {Button} from '@myob/myob-widgets';
import {MYOBLogo} from '@myob/myob-widgets';
import {Checkbox} from '@myob/myob-widgets';
import codeSchoolData from '../APICalls/CodeSchoolData.js';
import codeWarsData from "../APICalls/CodeWarsData.js";
import {getUserInfo} from "../APICalls/UserService";


export default class LevelTwoModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: true,
            cSharpChecked: false,
            gitRealChecked: false,
            jsRoadTripChecked: false,
            completedCWChallenges: false,
        };
        this.handleToggle = this.handleToggle.bind(this);
    }

//extract out the levels and the tasks
    //END-END test
    //enzyme and JEST
    handleToggle(event) {
        event.preventDefault();
        this.setState({...this.setState, isModalOpen: !this.state.isModalOpen});
    }

    async componentDidMount() {
        const result = await getUserInfo();
        codeSchoolData("Keeping It Classy With C#", (checked) => this.setState({cSharpChecked: checked}), result.codeSchoolUsername);
        codeSchoolData("Git Real", (checked) => this.setState({gitRealChecked: checked}), result.codeSchoolUsername);
        codeSchoolData("JavaScript Road Trip Part 1", (checked) => this.setState({jsRoadTripChecked: checked}), result.codeSchoolUsername);
        codeWarsData(4, (checked) => this.setState({completedCWChallenges: checked}), result.gitHubUsername)
    }

    render() {
        if (!this.state.isModalOpen) {
            return <span/>;
        }
        let classyLabel = "Keeping It Classy With C#";
        let gitRealLabel = "Git Real";
        let roadTrip1Label = "JavaScript Road Trip Part 1";
        let kataChallenges = "Must have completed 4 Code Wars";
        return (
            <div>
                <Modal title="Level Two" size="large" onCancel={this.handleToggle}>
                    <Modal.Body>
                        <h1> Complete the following to complete Level 2: </h1>
                        <Checkbox name="cSharp"
                                  label={classyLabel}
                                  checked={this.state.cSharpChecked}/>
                        <Checkbox name="gitReal"
                                  label={gitRealLabel}
                                  checked={this.state.gitRealChecked}/>
                        <Checkbox name="jsRoadtrip1"
                                  label={roadTrip1Label}
                                  checked={this.state.jsRoadTripChecked}/>
                        <Checkbox name="cwChalleges"
                                  label={kataChallenges}
                                  checked={this.state.completedCWChallenges}/>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}
