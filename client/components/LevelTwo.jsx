import React from 'react';

import "../index.css";
import {Checkbox as Checkbox} from '@myob/myob-widgets';

import codeSchoolData from '../APICalls/CodeSchoolData.js';
import codeWarsData from '../APICalls/CodeWarsData.js';
import {getUserInfo} from "../APICalls/UserService";


export default class LevelTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {checkBoxData: []};
    }

    async componentDidMount() {
        const result = await getUserInfo();
        const numberOfChallenges = 4;
        codeSchoolData("Keeping It Classy With C#", (checked) => this.setState(
            {
                checkBoxData: [...this.state.checkBoxData,
                    {
                        label: "Keeping It Classy With C#",
                        status: checked,
                        id: 1
                    }
                ]
            }), result.codeSchoolUsername);
        codeSchoolData("Git Real", (checked) => this.setState(
            {
                checkBoxData: [...this.state.checkBoxData,
                    {
                        label: "Git Real",
                        status: checked,
                        id: 2
                    }
                ]
            }), result.codeSchoolUsername);
        codeSchoolData("JavaScript Road Trip Part 1", (checked) => this.setState(
            {
                checkBoxData: [...this.state.checkBoxData,
                    {
                        label: "JavaScript Road Trip Part 1",
                        status: checked,
                        id: 3
                    }
                ]
            }), result.codeSchoolUsername);
        codeWarsData(numberOfChallenges, (checked) => this.setState(
            {
                checkBoxData: [...this.state.checkBoxData,
                    {
                        label:"Must have completed 4 Code Wars",
                        status: checked,
                        id: 4
                    }
                ]
            }), result.codeWarsUsername);
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
                <h1> Complete the following to complete Level 2: </h1>
                {this.createCheckboxes()}
            </div>
        );
    }
}

