import React from 'react';
import {shallow} from 'enzyme';
import DiseaseChance from "./DiseaseChance";
import Col from "react-bootstrap/Col";

describe('<DiseaseChance />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<DiseaseChance/>);
    });

    it('should render column with disease from props', () => {
        wrapper.setProps({disease: 'testDisease'});
        expect(wrapper.contains(<Col>testDisease</Col>)).toEqual(true);
    });

    it('should render column with chance derived from (zero) probability from props', () => {
        wrapper.setProps({probability: 0});
        expect(wrapper.contains(<Col>0.00%</Col>)).toEqual(true);
    });

    it('should render column with chance derived from probability from props with 1 digit after decimal point', () => {
        wrapper.setProps({probability: 0.8});
        expect(wrapper.contains(<Col>80.00%</Col>)).toEqual(true);
    });

    it('should render column with chance derived from probability from props with 2 digits after decimal point', () => {
        wrapper.setProps({probability: 0.87});
        expect(wrapper.contains(<Col>87.00%</Col>)).toEqual(true);
    });

    it('should render column with chance derived from probability from props with 3 digits after decimal point', () => {
        wrapper.setProps({probability: 0.876});
        expect(wrapper.contains(<Col>87.60%</Col>)).toEqual(true);
    });

    it('should render column with chance derived from probability from props with 4 digits after decimal point', () => {
        wrapper.setProps({probability: 0.8765});
        expect(wrapper.contains(<Col>87.65%</Col>)).toEqual(true);
    });

    it('should render column with (ceiling) chance derived from probability from props with 5 digits after decimal point', () => {
        wrapper.setProps({probability: 0.87656});
        expect(wrapper.contains(<Col>87.66%</Col>)).toEqual(true);
    });

    it('should render column with (floor) chance derived from probability from props with 5 digits after decimal point', () => {
        wrapper.setProps({probability: 0.87654});
        expect(wrapper.contains(<Col>87.65%</Col>)).toEqual(true);
    });
});