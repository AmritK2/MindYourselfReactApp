import React from 'react';
import {shallow} from 'enzyme';
import RegisterButtons from './RegisterButtons.jsx';

describe('Register Buttons Component', () => {

    it('should render intern button ', () => {
        const wrapper = shallow(<RegisterButtons/>);
        expect(wrapper.state().showUsernameForm).toBe(false);
        wrapper.findWhere(n => n.type() === 'button-intern' && n.contains('Intern Pack')).simulate('click');
        expect(wrapper.state().showUsernameForm).toBe(true);
    });
});