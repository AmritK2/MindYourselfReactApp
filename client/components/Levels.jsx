import React from 'react';
import PropTypes from 'prop-types';

import {Checkbox as Checkbox} from '@myob/myob-widgets';

export default class Levels extends React.Component{

    createCheckboxes = () => {
        return this.props.criteria.map( (criteria) => {
            const checked = !!criteria.apiCallStatus(criteria, this.props.userInfo);
            // console.log(checked);

            return <Checkbox
                key={criteria.name}
                name={criteria.name}
                label={criteria.name}
                checked = {checked}/>
        })
    };

    render(){
       return (
           <div>
               {this.createCheckboxes()}
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
