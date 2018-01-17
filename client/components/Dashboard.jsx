import React from 'react';

import "../index.css";
import { Modal } from '@myob/myob-widgets';
import { Button } from '@myob/myob-widgets';
import { MYOBLogo } from '@myob/myob-widgets';
import { Checkbox } from '@myob/myob-widgets';
import LevelOneModal from './LevelOneModal.jsx';
import LevelTwoModal from './LevelTwoModal.jsx';

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isModal1Open: false,
            isModal2Open: false
        };
        this.handleModal1 = this.handleModal1.bind(this);
        this.handleModal2 = this.handleModal2.bind(this);
    }

    handleModal1(event) {
        event.preventDefault();
        this.setState({ ...this.setState, isModal1Open: !this.state.isModal1Open });
    }

    handleModal2(event) {
        event.preventDefault();
        this.setState({ ...this.setState, isModal2Open: !this.state.isModal2Open });
    }

    render() {

        const modalOne = this.state.isModal1Open ? <div style={{ textAlign: 'center' }}>
            <LevelOneModal />
        </div> : "";

        const modalTwo = this.state.isModal2Open ? <div style={{ textAlign: 'center' }}>
            <LevelTwoModal />
        </div> : "";

        return (
            <div>
                <div className="logo-header"><MYOBLogo /></div>
                <div className="dashBoard"> <h1> Dashboard </h1> </div>
                <div className="level1">
                    <Button type="secondary" onClick={this.handleModal1}>Level 1</Button> </div>
                <div className="level2">
                    <Button type="secondary" onClick={this.handleModal2}>Level 2</Button> </div>
                {modalOne}
                {modalTwo}
            </div>
        )
    }
}
