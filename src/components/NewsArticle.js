import React from "react";
function NewsArticle({ data }) {
    return (
        <div className="news">
            <div className="news_content">
                <h1 className="news__title">{data.title}</h1>
                <p className="news__desc">{data.description}</p>
            </div>
            <div className="news_source">
                <a className="news__link" href={data.url} alt="link">Go to article</a> <br />
                <span className="news__author">{data.author}</span>
                <span className="news__published">{data.publishedAt.slice(0, 10)}</span>
                <span className="news__source">{data.source.name}</span>
            </div>
        </div>
    );
}

export default NewsArticle;
