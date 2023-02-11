import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { NewsContext } from '../NewsContext';
import News from '../components/News';
import '@testing-library/jest-dom'

afterEach(cleanup);

describe('News', () => {
  it('renders "Loading" when no data is available', () => {
    const { getByText } = render(
      <NewsContext.Provider value={{ data: null }}>
        <News />
      </NewsContext.Provider>
    );
    expect(getByText('Loading')).toBeInTheDocument();
  });

  it('renders the news articles when data is available', () => {
    const mockData = {
      articles: [
        {
          title: 'Article 1',
          description: 'Article 1 description',
          url: 'http://article1.com',
          source: {
            name: 'Source 1',
          },
          author: 'Author 1',
          publishedAt: '2022-01-01T00:00:00Z',
        },
        {
          title: 'Article 2',
          description: 'Article 2 description',
          url: 'http://article2.com',
          source: {
            name: 'Source 2',
          },
          author: 'Author 2',
          publishedAt: '2022-01-02T00:00:00Z',
        },
      ],
    };

    const { getByText } = render(
      <NewsContext.Provider value={{ data: mockData }}>
        <News />
      </NewsContext.Provider>
    );

    expect(getByText('Article 1')).toBeInTheDocument();
    expect(getByText('Article 1 description')).toBeInTheDocument();
    expect(getByText('Go to article at Source 1')).toBeInTheDocument();
    expect(getByText('Author 1')).toBeInTheDocument();
    expect(getByText('2022-01-01')).toBeInTheDocument();
    expect(getByText('Source 1')).toBeInTheDocument();

    expect(getByText('Article 2')).toBeInTheDocument();
    expect(getByText('Article 2 description')).toBeInTheDocument();
    expect(getByText('Go to article at Source 2')).toBeInTheDocument();
    expect(getByText('Author 2')).toBeInTheDocument();
    expect(getByText('2022-01-02')).toBeInTheDocument();
    expect(getByText('Source 2')).toBeInTheDocument();
  });
});
