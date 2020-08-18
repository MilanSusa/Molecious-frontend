import React from 'react';
import {mount} from 'enzyme';
import axiosMock from 'axios';
import Predictions from "./Predictions";
import Prediction from "../../components/Prediction/Prediction";

describe('<Predictions />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = mount(<Predictions/>);
    });

    it('should trigger axios call in useEffect', () => {
        expect(axiosMock.get).toHaveBeenCalledTimes(1);
    });

    it('should not render any Prediction components', () => {
        expect(wrapper.find(Prediction)).toHaveLength(0);
    });
});