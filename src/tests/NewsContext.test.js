import React from 'react';


import { NewsContextProvider } from '../NewsContext';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});



describe('NewsContextProvider', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NewsContextProvider />);
  });

  it('should render the search bar', () => {
    expect(wrapper.find('.searchbar').length).toBe(1);
  });

  it('should render the category selection', () => {
    expect(wrapper.find('.category_wrapper').length).toBe(1);
  });

  it('should render the region selection', () => {
    expect(wrapper.find('.region__selection').length).toBe(1);
  });
});
