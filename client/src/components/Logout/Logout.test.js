import React from 'react';
import {mount} from 'enzyme';
import axiosMock from 'axios';
import Logout from "./Logout";

describe('<Logout />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = mount(<Logout/>);
    });

    it('should trigger axios call in useEffect', () => {
        expect(axiosMock.post).toHaveBeenCalledTimes(1);
    });
});