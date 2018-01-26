import React from 'react';

import "../index.css";
import { Modal } from '@myob/myob-widgets';
import { Button } from '@myob/myob-widgets';
import { MYOBLogo } from '@myob/myob-widgets';
import { Checkbox } from '@myob/myob-widgets';

import LevelOneModal from './LevelOneModal.jsx';
import LevelTwoModal from './LevelTwoModal.jsx';

export default class DashboardForLevels extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLevel1ModalOpen: false,
            isLevel2ModalOpen: false
        };
        this.handleLevel1ModalClick = this.handleLevel1ModalClick.bind(this);
        this.handleLevel2ModalClick = this.handleLevel2ModalClick.bind(this);
    }

    handleLevel1ModalClick(event) {
        event.preventDefault();
        this.setState({ ...this.setState, isLevel1ModalOpen: !this.state.isLevel1ModalOpen });
    }

    handleLevel2ModalClick(event) {
        event.preventDefault();
        this.setState({ ...this.setState, isLevel2ModalOpen: !this.state.isLevel2ModalOpen });
    }


    render() {
        const modalOne = this.state.isLevel1ModalOpen ? <div style={{ textAlign: 'center' }}>
            <LevelOneModal />
        </div> : "";
        const modalTwo = this.state.isLevel2ModalOpen ? <div style={{ textAlign: 'center' }}>
            <LevelTwoModal />
        </div> : "";


        return (
            <div>
                <div className="logo-header"><MYOBLogo /></div>
                <div className="dashBoard"> <h1> Dashboard </h1> </div>
                <div className="level1">
                    <Button type="secondary" onClick={this.handleLevel1ModalClick}>Level 1</Button> </div>
                <div className="level2">
                    <Button type="secondary" onClick={this.handleLevel2ModalClick}>Level 2</Button> </div>
                {modalOne}
                {modalTwo}


            </div>
        )
    }
}
