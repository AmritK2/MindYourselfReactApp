import React from 'react';

import "../index.css";
import { Modal } from '@myob/myob-widgets';
import { Button } from '@myob/myob-widgets';
import { MYOBLogo } from '@myob/myob-widgets';
import { Checkbox } from '@myob/myob-widgets';

import LevelOne from './LevelOne.jsx';
import LevelTwo from './LevelTwo.jsx';

export default class DashboardForLevels extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showLevel1: false,
            showLevel2: false
        };
        this.handleLevel1Click = this.handleLevel1Click.bind(this);
        this.handleLevel2Click = this.handleLevel2Click.bind(this);
    }

    handleLevel1Click(event) {
        event.preventDefault();
        this.setState({ ...this.setState, showLevel1: true, showLevel2: false});
    }

    handleLevel2Click(event) {
        event.preventDefault();
        this.setState({ ...this.setState, showLevel2: true, showLevel1: true});
    }


    render() {
        const levelOne = this.state.showLevel1 ? <div style={{ textAlign: 'center' }}>
            <LevelOne/>
        </div> : "";
        const levelTwo = this.state.showLevel2 ? <div style={{ textAlign: 'center' }}>
            <LevelTwo />
        </div> : "";


        return (
            <div>
                <div className="logo-header"><MYOBLogo /></div>
                <div className="dashBoard"> <h1> Dashboard </h1> </div>
                <div className="level1">
                    <Button className= "level1-button" type="secondary" onClick={this.handleLevel1Click}>Level 1</Button> </div>
                <div className="level2">
                    <Button type="secondary" onClick={this.handleLevel2Click}>Level 2</Button> </div>
                {levelOne}
                {levelTwo}


            </div>
        )
    }
}
