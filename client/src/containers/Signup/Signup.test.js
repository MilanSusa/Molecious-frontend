import React from 'react';
import {mount} from 'enzyme';
import Signup from "./Signup";
import {Alert} from "react-bootstrap";

describe('<Signup />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = mount(<Signup/>);
    });

    it('should not render Alert component when error does not exist', () => {
        expect(wrapper.find(Alert)).toHaveLength(0);
    });
});