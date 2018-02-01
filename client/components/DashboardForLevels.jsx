import React from 'react';

import "../index.css";
import {Modal} from '@myob/myob-widgets';
import {Button} from '@myob/myob-widgets';
import {MYOBLogo} from '@myob/myob-widgets';
import {Checkbox} from '@myob/myob-widgets';

import Levels from './Levels.jsx';
import codeSchoolData from '../APICalls/CodeSchoolData.js';
import codeWarsData from '../APICalls/CodeWarsData.js';
import getCodeReviewState from '../APICalls/GithubUserData.js';
import {getUserInfo} from "../APICalls/UserService";

export default class DashboardForLevels extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            levelOne: [
                {
                    name: "Try Git",
                    apiCallStatus: codeSchoolData
                },
                {
                    name: "Try C#",
                    apiCallStatus: codeSchoolData
                },
                {
                    name: "Must Have Completed 2 Code Wars",
                    apiCallStatus: codeWarsData
                },
                {
                    name: "PaySlip",
                    apiCallStatus: getCodeReviewState
                }
            ],
            levelTwo: [
                {
                    name: "Keeping It Classy With C#",
                    apiCallStatus: codeSchoolData
                },
                {
                    name: "Git Real",
                    apiCallStatus: codeSchoolData
                },
                {
                    name: "JavaScript Road Trip Part 1",
                    apiCallStatus: codeSchoolData
                },
                {
                    name: "Must have completed 4 Code Wars",
                    apiCallStatus: codeWarsData
                }
            ],
            showLevelOne: false,
            showLevelTwo: false,
            userInfo: {}
        };
        this.handleLevel1Click = this.handleLevel1Click.bind(this);
        this.handleLevel2Click = this.handleLevel2Click.bind(this);
    }

    async componentWillMount() {
        const result = await getUserInfo();
        this.setState({userInfo: result});
    }

    handleLevel1Click(event) {
        event.preventDefault();
        this.setState({...this.setState, showLevelOne: true});
    }

    handleLevel2Click(event) {
        event.preventDefault();
        this.setState({...this.setState, showLevelTwo: true});
    }

    render() {
        const levelOne = this.state.showLevelOne ? <div style={{textAlign: 'center'}}>
            <Levels userInfo={this.state.userInfo} criteria={this.state.levelOne}/>
        </div> : "";
        const levelTwo = this.state.showLevelTwo ? <div style={{textAlign: 'center'}}>
            <Levels userInfo={this.state.userInfo} criteria={this.state.levelTwo}/>
        </div> : "";

        return (
            <div>
                <div className="logo-header"><MYOBLogo/></div>
                <div className="dashBoard"><h1> Dashboard </h1></div>
                <div className="level1">
                    <Button className="level1-button" type="secondary" onClick={this.handleLevel1Click}>Level 1</Button>
                </div>
                <div className="level2">
                    <Button type="secondary" onClick={this.handleLevel2Click}>Level 2</Button></div>
                {levelOne}
                {levelTwo}
            </div>
        )
    }
}
