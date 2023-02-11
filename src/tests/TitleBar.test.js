import React from 'react';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { shallow, configure } from 'enzyme';
import TitleBar from '../components/TitleBar';
configure({adapter: new Adapter()});
describe('TitleBar component', () => {
    it('renders without crashing', () => {
        shallow(<TitleBar />);
    });

    it('renders the logo', () => {
        const wrapper = shallow(<TitleBar />);
        expect(wrapper.find('.titlebar__logo').length).toBe(1);
        expect(wrapper.find('img').prop('src')).toEqual('../logo.gif');
        expect(wrapper.find('img').prop('alt')).toEqual('logo');
        expect(wrapper.find('img').prop('height')).toEqual(130);
    });

    it('renders the title text', () => {
        const wrapper = shallow(<TitleBar />);
        expect(wrapper.find('.titlebar h1').length).toBe(1);
        expect(wrapper.find('.titlebar h1').text()).toEqual('IUBH News Page Project');
    });
});
