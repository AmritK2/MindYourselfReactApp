import React from 'react';
import {shallow, mount, render} from 'enzyme';
import UsernameForm from '../UsernameForm.jsx';
import {expect} from "jest-enzyme";
// import renderer from "react-test-renderer";

describe('UserNameForm Component', () => {

    it ('should render without throwing an error', () => {
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