import React from "react";
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { shallow, configure } from 'enzyme';
import NewsArticle from "../components/NewsArticle";
configure({adapter: new Adapter()});
describe("NewsArticle", () => {
  let wrapper;
  let mockData = {
    title: "Test Article",
    description: "This is a test article",
    url: "https://testarticle.com",
    source: {
      name: "Test Source"
    },
    author: "Test Author",
    publishedAt: "2022-01-01T00:00:00Z"
  };

  beforeEach(() => {
    wrapper = shallow(<NewsArticle data={mockData} />);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should display the correct title", () => {
    expect(wrapper.find(".news__title").text()).toBe(mockData.title);
  });

  it("should display the correct description", () => {
    expect(wrapper.find(".news__desc").text()).toBe(mockData.description);
  });

  it("should display the correct link", () => {
    expect(wrapper.find(".news__link").prop("href")).toBe(mockData.url);
  });

  it("should display the correct source", () => {
    expect(wrapper.find(".news__source").text()).toBe(mockData.source.name);
  });

  it("should display the correct author", () => {
    expect(wrapper.find(".news__author").text()).toBe(mockData.author);
  });

  it("should display the correct published date", () => {
    expect(wrapper.find(".news__published").text()).toBe(mockData.publishedAt.slice(0, 10));
  });
});

