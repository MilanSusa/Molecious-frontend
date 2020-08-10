import React from 'react';
import {shallow} from 'enzyme';
import Layout from "./Layout";

describe('<Layout />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<Layout/>);
    });

    it('should render single child from props', () => {
        wrapper.setProps({children: <div className="test"/>})
        expect(wrapper.contains(<div className="test"/>)).toEqual(true);
    });

    it('should render children from props', () => {
        wrapper.setProps({
            children:
                <React.Fragment>
                    <div className="first-test"/>
                    <div className="second-test"/>
                </React.Fragment>
        })
        expect(wrapper.contains(<div className="first-test"/>)).toEqual(true);
        expect(wrapper.contains(<div className="second-test"/>)).toEqual(true);
    });
});