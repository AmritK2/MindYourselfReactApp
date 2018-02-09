import React from 'react';
import getCodeReviewState from "../APICalls/GithubUserData";
import codeWarsData from "../APICalls/CodeWarsData";
import codeSchoolData from "../APICalls/CodeSchoolData";

import DashboardForLevels from "./DashboardForLevels.jsx";

class LevelsCriteria extends React.Component{
    render() {
        return (
           <DashboardForLevels levelcriteria = {levels}/>
        )
    }
}

const levels = {
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
    ]
};