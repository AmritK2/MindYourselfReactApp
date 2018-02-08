import React from 'react';
import PropTypes from 'prop-types';

import {Step, Stepper, StepContent} from 'material-ui/Stepper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Levels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            criteriaWithResults: []
        };
    }

    async componentDidMount() {
        const promises = this.props.criteria.map(async (criteria) => {
            return {
                name: criteria.name,
                result: await criteria.apiCallStatus(criteria, this.props.userInfo)
            };
        });
        const criteriaWithResults = await Promise.all(promises);
        this.setState({criteriaWithResults: criteriaWithResults});
    }

    render() {
        const createCheckboxes = this.state.criteriaWithResults.map((criteria) => {
            return<MuiThemeProvider> <div key={criteria.name}>
                    <Stepper orientation="vertical">
                        <Step completed={criteria.result}>
                            <StepContent>
                                {criteria.name}
                            </StepContent>
                        </Step>
                    </Stepper>
            </div>
            </MuiThemeProvider>;
        });
        return (
            <div>
                {createCheckboxes}
            </div>
        )
    }
}


Levels.propTypes = {
    key: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    checked: PropTypes.bool
};
