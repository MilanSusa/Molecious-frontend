import React from 'react';
import {mount} from 'enzyme';
import {Alert} from "react-bootstrap";
import Predict from "./Predict";
import Prediction from "../../components/Prediction/Prediction";
import Spinner from "react-bootstrap/Spinner";

describe('<Predict />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = mount(<Predict/>);
    });

    it('should not render Alert component when error does not exist', () => {
        expect(wrapper.find(Alert)).toHaveLength(0);
    });

    it('should not render Prediction component when response does not exist', () => {
        expect(wrapper.find(Prediction)).toHaveLength(0);
    });

    it('should not render Spinner component when loading state is false', () => {
        expect(wrapper.contains(
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
            />
        )).toEqual(false);
    });
});