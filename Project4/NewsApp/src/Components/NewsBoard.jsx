import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";

function NewsBoard({category}) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let newsUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(newsUrl)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);
  return (
    <div>
      <h2 className="text-center" style={{ marginTop: "5px" }}>
        Latest{" "}
        <span className="Badge bg-danger" style={{ borderRadius: "5px" }}>
          News
        </span>
        </h2>
        {articles.map((news, index) => {
          return (
            <NewsItems
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          )
        })}
      
    </div>
  );
}

export default NewsBoard;
