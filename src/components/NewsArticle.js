import React from "react";

// Display the data of the given element from the dataset
// Provides a Link to go to the articles and short description with the source
// provided from the newsapi
function NewsArticle({ data }) {
    let imageUrl = data.urlToImage;
    if(!imageUrl){
        imageUrl="https://images.unsplash.com/photo-1627507055227-dd9c87118eb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80";
    }
   
    return (
        <div className="news">
            <div className="news_content">
                <h1 className="news__title">{data.title}</h1>
                <img src={imageUrl} alt="" />
                <p className="news__desc">{data.description}</p>
            </div>
            <div className="news_source">
                <a className="news__link" href={data.url} alt="link" target="_blank" rel="_ noreferrer">Go to article at {data.source.name}</a> <br />
                <span className="news__author">{data.author}</span>
                <span className="news__published">{data.publishedAt.slice(0, 10)}</span>
                <span className="news__source">{data.source.name}</span>
            </div>
        </div>
    );
}

export default NewsArticle;
