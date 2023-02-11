import React from "react";
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { shallow, configure } from 'enzyme';
import App from "../App";
import TitleBar from "../components/TitleBar";
import News from "../components/News";
import { NewsContextProvider } from "../NewsContext";
configure({adapter: new Adapter()});
describe("App component", () => {
    it("renders without crashing", () => {
      const wrapper = shallow(<App />);
      expect(wrapper).toBeTruthy();
    });
  
    it("contains the TitleBar component", () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(TitleBar)).toHaveLength(1);
    });
  
    it("contains the NewsContextProvider component", () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(NewsContextProvider)).toHaveLength(1);
    });
  
    it("contains the News component", () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(News)).toHaveLength(1);
    });
  });