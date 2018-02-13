import React from 'react';

import "../index.css";
import {Modal} from '@myob/myob-widgets';
import {Button} from '@myob/myob-widgets';
import {MYOBLogo} from '@myob/myob-widgets';
import {Checkbox} from '@myob/myob-widgets';
import {levels} from './LevelsCriteria.js';

import LevelCheckboxes from './LevelCheckboxes.jsx';
import {getUserUsernames} from '../APICalls/UserService';

export default class DashboardForLevels extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showLevelOne: false,
            showLevelTwo: false,
            showLevelThree: false,
            showLevelFour: false,
            showLevelFive: false,
            userInfo: {}
        };
        this.handleLevel1Click = this.handleLevel1Click.bind(this);
        this.handleLevel2Click = this.handleLevel2Click.bind(this);
        this.handleLevel3Click = this.handleLevel3Click.bind(this);
        this.handleLevel4Click = this.handleLevel4Click.bind(this);
        this.handleLevel5Click = this.handleLevel5Click.bind(this);
    }

    async componentWillMount() {
        const result = await getUserUsernames();
        this.setState({userInfo: result});
    }

    handleLevel1Click(event) {
        event.preventDefault(); 
        this.setState({...this.state, showLevelOne: true, showLevelTwo: false, showLevelThree: false, showLevelFour: false, showLevelFive: false});
    }

    handleLevel2Click(event) {
        event.preventDefault();
        this.setState({...this.state, showLevelTwo: true, showLevelOne: false, showLevelThree: false, showLevelFour: false, showLevelFive: false});
    }

    handleLevel3Click(event) {
        event.preventDefault();
        this.setState({...this.state, showLevelThree: true, showLevelOne: false, showLevelTwo: false, showLevelFour: false, showLevelFive: false});
    }

    handleLevel4Click(event) {
        event.preventDefault();
        this.setState({...this.state, showLevelFour: true, showLevelOne: false, showLevelTwo: false, showLevelThree: false, showLevelFive: false});
    }

    handleLevel5Click(event) {
        event.preventDefault();
        this.setState({...this.state, showLevelFive: true, showLevelOne: false, showLevelTwo: false, showLevelThree: false, showLevelFour: false});
    }

    render() {
        const levelOne = this.state.showLevelOne ? <div style={{textAlign: 'center'}}>
            <LevelCheckboxes userInfo={this.state.userInfo} criteria={levels.levelOne}/>
        </div> : "";
        const levelTwo = this.state.showLevelTwo ? <div style={{textAlign: 'center'}}>
            <LevelCheckboxes userInfo={this.state.userInfo} criteria={levels.levelTwo}/>
        </div> : "";
        const levelThree = this.state.showLevelThree ? <div style={{textAlign: 'center'}}>
            <LevelCheckboxes userInfo={this.state.userInfo} criteria={levels.levelThree}/>
        </div> : "";
        const levelFour = this.state.showLevelFour ? <div style={{textAlign: 'center'}}>
            <LevelCheckboxes userInfo={this.state.userInfo} criteria={levels.levelFour}/>
        </div> : "";
        const levelFive = this.state.showLevelFive ? <div style={{textAlign: 'center'}}>
            <LevelCheckboxes userInfo={this.state.userInfo} criteria={levels.levelFive}/>
        </div> : "";

        return (
            <div>
                <div className="logo-header"><MYOBLogo/></div>
                <div className="dashBoard"><h1> Dashboard </h1></div>
                <div className="level1">
                    <Button className="level1-button" type="primary" onClick={this.handleLevel1Click}>Level 1</Button></div>
                <div className="level2">
                    <Button type="primary" onClick={this.handleLevel2Click}>Level 2</Button></div>
                <div className="level3">
                    <Button type="primary" onClick={this.handleLevel3Click}>Level 3</Button></div>
                <div className="level4">
                    <Button type="primary" onClick={this.handleLevel4Click}>Level 4</Button></div>
                <div className="level5">
                    <Button type="primary" onClick={this.handleLevel5Click}>Level 5</Button></div>
                {levelOne}
                {levelTwo}
                {levelThree}
                {levelFour}
                {levelFive}
            </div>
        )
    }
}
