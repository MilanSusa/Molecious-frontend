import React from 'react';
import {mount} from 'enzyme';
import axiosMock from 'axios';
import Predictions from "./Predictions";

describe('<Predictions />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = mount(<Predictions/>);
    });

    it('should trigger axios call in useEffect', () => {
        expect(axiosMock.get).toHaveBeenCalledTimes(1);
    });
});