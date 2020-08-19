import React, {useState as useStateMock} from 'react';
import {mount} from 'enzyme';
import axiosMock from 'axios';
import Navigation from "./Navigation";
import Nav from "react-bootstrap/Nav";

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}));

describe('<Navigation />', () => {
    let wrapper = null;
    const setState = jest.fn();

    beforeEach(() => {
        useStateMock.mockImplementation(init => [init, setState]);
        wrapper = mount(<Navigation/>);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should trigger axios call in useEffect', () => {
        expect(axiosMock.post).toHaveBeenCalledTimes(1);
    });

    it('should render only signup and login nav links when user does not exist', () => {
        expect(wrapper.contains(<Nav.Link href="/signup">Sign up</Nav.Link>)).toEqual(true);
        expect(wrapper.contains(<Nav.Link href="/login">Login</Nav.Link>)).toEqual(true);

        expect(wrapper.contains(<Nav.Link href="/predict">Predict</Nav.Link>)).toEqual(false);
        expect(wrapper.contains(<Nav.Link href="/predictions">Predictions</Nav.Link>)).toEqual(false);
        expect(wrapper.contains(<Nav.Link href="/logout">Logout</Nav.Link>)).toEqual(false);
    });

    it('should call setState in useEffect', () => {
        expect(setState).toHaveBeenCalledTimes(1);
    });
});