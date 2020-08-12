import React from 'react';
import {mount} from 'enzyme';
import axiosMock from 'axios';
import Navigation from "./Navigation";

describe('<Navigation />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = mount(<Navigation/>);
    });

    it('should trigger axios call in useEffect', () => {
        expect(axiosMock.post).toHaveBeenCalledTimes(1);
    });
});