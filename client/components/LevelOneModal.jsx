import React from 'react';

import "../index.css";
import {Checkbox} from '@myob/myob-widgets';

import codeSchoolData from '../APICalls/CodeSchoolData.js';
import codeWarsData from '../APICalls/CodeWarsData.js';
import getCodeReviewState from '../APICalls/GithubUserData.js';
import {getUserInfo} from "../APICalls/UserService";


export default class LevelOneModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tryGitChecked: false,
            tryCSharpChecked: false,
            checkedCompletedCWChallenges: false,
        };
    }

    async componentDidMount() {
        const result = await getUserInfo();
        const numberOfChallenges = 2;
        codeSchoolData("Try Git", (checked) => this.setState({stateOfTheCheckBox: checked}), result.codeSchoolUsername);
        codeSchoolData("Try C#", (checked) => this.setState({stateOfTheCheckBox: checked}), result.codeSchoolUsername);
        codeWarsData(numberOfChallenges, (checked) => this.setState({stateOfTheCheckBox: checked}), result.codeWarsUsername);
        getCodeReviewState("PaySlip", (checked) => this.setState({stateOfTheCheckBox: checked}), result.gitHubUsername);
    }

    levelRequirements = (labels) => (
        <Checkbox
            label = {labels}
            name = {labels} />
            // checked = {this.stateOfTheCheckBox} />
    );


    createCheckboxes = () => {
        const checkBoxLabels = [
            'Try Git',
            'Try C#',
            'Must have completed 2 Code Wars',
            'PaySlip Kata Finished'
        ];
       console.log(checkBoxLabels.map(this.levelRequirements));
    };

    render() {

        return (
            <div>
                        <h1> Complete the following to complete Level 1: </h1>
                        {this.createCheckboxes}
            </div>
        );
    }
}


