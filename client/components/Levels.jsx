import React from 'react';

import {Checkbox as Checkbox} from '@myob/myob-widgets';

export default class Levels extends React.Component{

    createCheckboxes = () => {
        return this.props.criteria.map((criteria) => {
            return <Checkbox
                key={criteria.name}
                name={criteria.name}
                label={criteria.name}
                checked = {criteria.apiCallStatus(criteria.name, this.props.userInfo)} />
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