import React from 'react';
import {shallow} from 'enzyme';
import UsernameForm from './UsernameForm.jsx';

describe('UserNameForm Component', () => {

    it ('should render properly', () => {
        expect(shallow(<UsernameForm />).exists(<form className="usernameInput"> </form>)).toBe(true)
    });

    it ('renders code wars name input', () => {
        expect(shallow(<UsernameForm />).find('#cwname').length).toEqual(1)
    });

    it ('renders code school name input', () => {
        expect(shallow(<UsernameForm />).find('#csname').length).toEqual(1)
    });

    it ('renders github name input', () => {
        expect(shallow(<UsernameForm />).find('#ghname').length).toEqual(1)
    });
});