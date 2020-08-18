import React from 'react';
import {mount} from 'enzyme';
import {Alert} from "react-bootstrap";
import Login from "./Login";

describe('<Login />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = mount(<Login/>);
    });

    it('should not render Alert component when error does not exist', () => {
        expect(wrapper.find(Alert)).toHaveLength(0);
    });
});