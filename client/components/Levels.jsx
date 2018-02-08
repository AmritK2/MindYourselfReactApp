import React from 'react';
import PropTypes from 'prop-types';

import {Checkbox as Checkbox} from '@myob/myob-widgets';

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
            return <div key={criteria.name}>
                <Checkbox
                    name={criteria.name}
                    label={criteria.name}
                    checked={criteria.result}/>
                </div>;
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
