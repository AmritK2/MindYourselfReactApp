import React from 'react';
import PropTypes from 'prop-types';

// import {Checkbox as Checkbox} from '@myob/myob-widgets';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
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
        const criteriaWithResults = await Promise.all(promises);D
        this.setState({criteriaWithResults: criteriaWithResults});
    }

    render() {
        const createCheckboxes = this.state.criteriaWithResults.map((criteria) => {
            return <div key={criteria.name}>
                <MuiThemeProvider>
                    <RadioButtonGroup name="levels" valueSelected = {criteria.result}>
                        <RadioButton
                            label={criteria.name}
                            style={styles.radioButton}
                        />
                    </RadioButtonGroup>
                </MuiThemeProvider>
            </div>;
        });
        return (
            <div>
                {createCheckboxes}
            </div>
        )
    }
}

const styles = {
    radioButton:{
        marginBottom:16,
        marginLeft: 16
    }
};

Levels.propTypes = {
    key: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    checked: PropTypes.bool
};
