import React from 'react';
import "../index.css";
import {MYOBLogo} from '@myob/myob-widgets';
import Levels from './Levels.jsx';
import codeSchoolData from '../APICalls/CodeSchoolData.js';
import codeWarsData from '../APICalls/CodeWarsData.js';
import getCodeReviewState from '../APICalls/GithubUserData.js';
import {getUserUsernames} from "../APICalls/UserService";
import {Step, Stepper, StepButton, StepContent} from 'material-ui/Stepper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

export default class DashboardForLevels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            levelOne: [
                {
                    name: "Try Git",
                    apiCallStatus: codeSchoolData,
                    challengeCount: 0
                },
                {
                    name: "Try C#",
                    apiCallStatus: codeSchoolData,
                    challengeCount: 0
                },
                {
                    name: "Must Have Completed 2 Code Wars",
                    apiCallStatus: codeWarsData,
                    challengeCount: 2
                },
                {
                    name: "PaySlip",
                    apiCallStatus: getCodeReviewState,
                    challengeCount: 0
                }
            ],
            levelTwo: [
                {
                    name: "Keeping It Classy With C#",
                    apiCallStatus: codeSchoolData,
                    challengeCount: 0
                },
                {
                    name: "Git Real",
                    apiCallStatus: codeSchoolData,
                    challengeCount: 0
                },
                {
                    name: "JavaScript Road Trip Part 1",
                    challengeCount: 0,
                    apiCallStatus: codeSchoolData
                },
                {
                    name: "Must have completed 4 Code Wars",
                    apiCallStatus: codeWarsData,
                    challengeCount: 4
                }
            ],
            levelThree: [
                {
                    name: "Mastering Github Course",
                    apiCallStatus: codeSchoolData,
                    challengeCount: 0
                },
                {
                    name: "StringCalculatorKata",
                    apiCallStatus: getCodeReviewState,
                    challengeCount: 0
                },
                {
                    name: "JavaScript Road Trip Part 2",
                    apiCallStatus: codeSchoolData,
                    challengeCount: 0
                },
                {
                    name: "Must have completed 6 Code Wars",
                    apiCallStatus: codeWarsData,
                    challengeCount: 6
                }
            ],
            levelFour: [
                {
                    name: "Powering Up With React",
                    apiCallStatus: codeSchoolData,
                    challengeCount: 0
                },
                {
                    name: "ConwaysGame",
                    apiCallStatus: getCodeReviewState,
                    challengeCount: 0
                },
                {
                    name: "JavaScript Road Trip Part 2",
                    apiCallStatus: codeSchoolData,
                    challengeCount: 0
                },
                {
                    name: "Must have completed 8 Code Wars",
                    apiCallStatus: codeWarsData,
                    challengeCount: 8
                }
            ],
            levelFive: [
                {
                    name: "Try JQuery",
                    apiCallStatus: codeSchoolData,
                    challengeCount: 0
                },
                {
                    name: "TicTacToe",
                    apiCallStatus: getCodeReviewState,
                    challengeCount: 0
                },
                {
                    name: "ES2015: The Shape of JavaScript to Come",
                    apiCallStatus: codeSchoolData,
                    challengeCount: 0
                },
                {
                    name: "Must have completed 10 Code Wars",
                    apiCallStatus: codeWarsData,
                    challengeCount: 10
                }
            ],
            showLevelOne: false,
            showLevelTwo: false,
            showLevelThree: false,
            showLevelFour: false,
            showLevelFive: false,
            userInfo: {},
            stepIndex: 0
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
        this.setState({...this.setState, stepIndex: 0, showLevelOne: true, showLevelTwo: false, showLevelThree: false, showLevelFour: false, showLevelFive: false});
    }

    handleLevel2Click(event) {
        event.preventDefault();
        this.setState({...this.setState, stepIndex: 1, showLevelTwo: true, showLevelOne: false, showLevelThree: false, showLevelFour: false, showLevelFive: false});
    }

    handleLevel3Click(event) {
        event.preventDefault();
        this.setState({...this.setState, stepIndex: 2, showLevelThree: true, showLevelOne: false, showLevelTwo: false, showLevelFour: false, showLevelFive: false});
    }

    handleLevel4Click(event) {
        event.preventDefault();
        this.setState({...this.setState, stepIndex: 3, showLevelFour: true, showLevelOne: false, showLevelTwo: false, showLevelThree: false, showLevelFive: false});
    }

    handleLevel5Click(event) {
        event.preventDefault();
        this.setState({...this.setState, stepIndex: 4, showLevelFive: true, showLevelOne: false, showLevelTwo: false, showLevelThree: false, showLevelFour: false});
    }

    state = {
        stepIndex: 0,
    };

    handleNext = () => {
        const {stepIndex} = this.state;
        if (stepIndex < 2) {
            this.setState({stepIndex: stepIndex + 1});
        }
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };

    renderStepActions(step) {
        return (
            <div style={{margin: '12px 0'}}>
                <RaisedButton
                    label="Next"
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    primary={true}
                    onClick={this.handleNext}
                    style={{marginRight: 12}}
                />
                {step > 0 && (
                    <FlatButton
                        label="Back"
                        disableTouchRipple={true}
                        disableFocusRipple={true}
                        onClick={this.handlePrev}
                    />
                )}
            </div>
        );
    }

    render() {
        const levelOne = this.state.showLevelOne ? <div style={{textAlign: 'center'}}>
            <Levels userInfo={this.state.userInfo} criteria={this.state.levelOne}/>
        </div> : "";
        const levelTwo = this.state.showLevelTwo ? <div style={{textAlign: 'center'}}>
            <Levels userInfo={this.state.userInfo} criteria={this.state.levelTwo}/>
        </div> : "";
        const levelThree = this.state.showLevelThree ? <div style={{textAlign: 'center'}}>
            <Levels userInfo={this.state.userInfo} criteria={this.state.levelThree}/>
        </div> : "";
        const levelFour = this.state.showLevelFour ? <div style={{textAlign: 'center'}}>
            <Levels userInfo={this.state.userInfo} criteria={this.state.levelFour}/>
        </div> : "";
        const levelFive = this.state.showLevelFive ? <div style={{textAlign: 'center'}}>
            <Levels userInfo={this.state.userInfo} criteria={this.state.levelFive}/>
        </div> : "";

        return (
            <div>
                <div className="logo-header"><MYOBLogo/></div>
                <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
                    <h1>
                        Dashboard
                    </h1>
                    <MuiThemeProvider>
                        <Stepper activeStep={this.stepIndex} linear={false} orientation="vertical">
                            <Step>
                                <StepButton onClick={this.handleLevel1Click}>
                                    Level One
                                </StepButton>
                                <StepContent>
                                    {/*{levelOne}*/}
                                    <p>Working?</p>
                                    {this.renderStepActions(0)}
                                </StepContent>
                            </Step>
                            <Step>
                                <StepButton onClick={this.handleLevel2Click}>
                                    Level Two
                                </StepButton>
                                <StepContent>
                                    {/*{levelTwo}*/}
                                    <p>Working?</p>
                                    {this.renderStepActions(1)}
                                </StepContent>
                            </Step>
                            <Step>
                                <StepButton onClick={this.handleLevel3Click}>
                                    Level Three
                                </StepButton>
                                <StepContent>
                                    {/*{levelThree}*/}
                                    <p>Working?</p>
                                    {this.renderStepActions(2)}
                                </StepContent>
                            </Step>
                            <Step>
                                <StepButton onClick={this.handleLevel4Click}>
                                    Level Four
                                </StepButton>
                                <StepContent>
                                    {/*{levelFour}*/}
                                    <p>Working?</p>
                                    {this.renderStepActions(3)}
                                </StepContent>
                            </Step>
                            <Step>
                                <StepButton onClick={this.handleLevel5Click}>
                                    Level Five
                                </StepButton>
                                <StepContent>
                                    {/*{levelFive}*/}
                                    <p>Working?</p>
                                    {this.renderStepActions(4)}
                                </StepContent>
                            </Step>
                        </Stepper>
                    </MuiThemeProvider>
                </div>
            </div>
        )
    }
}
