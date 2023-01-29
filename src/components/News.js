import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";

// If data has loaded then iterate through the data set and generate a NewsArticle
// for each element in the data set. Else display "Loading"
function News(props) {
    const { data } = useContext(NewsContext);
    return (
        <div className="news_wrapper">
            <div className="all__news">
                {data
                    ? data.articles.map((news) => (
                        <NewsArticle data={news} key={news.url} />
                    ))
                    : "Loading"}
            </div>
        </div>
    );
}

export default News;
