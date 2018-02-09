import React from 'react';
import {shallow} from 'enzyme';
import RegisterButtons from './Intern&GradPackOption.jsx';

describe('Register Buttons Component', () => {
    const fakeEvent = {preventDefault: jest.fn()};

    it('should render intern button ', () => {
        const wrapper = shallow(<RegisterButtons/>);
        expect(wrapper.state().showUsernameForm).toBe(false);
        wrapper.find(".qa-intern-button").simulate("click", fakeEvent);
        expect(wrapper.state().showUsernameForm).toBe(true);
    });

    it('should render grad button ', () => {
        const wrapper = shallow(<RegisterButtons/>);
        expect(wrapper.state().showUsernameForm).toBe(false);
        wrapper.find(".qa-grad-button").simulate("click", fakeEvent);
        expect(wrapper.state().showUsernameForm).toBe(true);
    });
});