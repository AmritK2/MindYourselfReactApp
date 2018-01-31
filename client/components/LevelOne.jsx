import React from 'react';

import "../index.css";
import {Checkbox as Checkbox} from '@myob/myob-widgets';

import codeSchoolData from '../APICalls/CodeSchoolData.js';
import codeWarsData from '../APICalls/CodeWarsData.js';
import getCodeReviewState from '../APICalls/GithubUserData.js';
import {getUserInfo} from "../APICalls/UserService";


export default class LevelOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {checkBoxData: []};
    }

    async componentDidMount() {
        const result = await getUserInfo();
        const numberOfChallenges = 2;
        codeSchoolData("Try Git", (checked) => this.setState(
            {
                checkBoxData: [...this.state.checkBoxData,
                    {
                        label: "Try Git",
                        status: checked,
                        id: 1
                    }
                ]
            }), result.codeSchoolUsername);
        codeSchoolData("Try C#", (checked) => this.setState(
            {
                checkBoxData: [...this.state.checkBoxData,
                    {
                        label: "Try C#",
                        status: checked,
                        id: 2
                    }
                ]
            }), result.codeSchoolUsername);
        codeWarsData(numberOfChallenges, (checked) => this.setState(
            {
                checkBoxData: [...this.state.checkBoxData,
                    {
                        label: "Must have completed 2 Code Wars",
                        status: checked,
                        id: 3
                    }
                ]
        }), result.codeWarsUsername);
        getCodeReviewState("PaySlip", (checked) => this.setState(
            {
                checkBoxData: [...this.state.checkBoxData,
                    {
                        label: "PaySlip Kata Finished",
                        status: checked,
                        id: 4}]
        }), result.gitHubUsername);
    }
    createCheckboxes = () => {
         return this.state.checkBoxData.map((checkboxData) => {
            return <Checkbox
                key={checkboxData.label}
                name={checkboxData.label}
                label={checkboxData.label}
            checked = {checkboxData.status} />
        })
    };

    render() {
        return (
            <div>
                <h1> Complete the following to complete Level 1: </h1>
                {this.createCheckboxes()}
            </div>
        );
    }
}


