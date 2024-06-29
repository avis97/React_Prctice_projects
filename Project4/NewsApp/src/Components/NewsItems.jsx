import React from "react";
function NewsItems({ title, src, url, description }) {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block mx-4 my-4 px-3 py-3"
      style={{ width: "350px" }}
    >
      <img
        className="card-img-top"
        style={{ height: "210px", width: "320px" }}
        src={src?src:"./src/news.jpg"}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "No one was hurt, but a lawyer for the Florida family said the near miss could have been catastrophic. How NASA responds could set a legal precedent, the lawyer said."}
        </p>
        <a href={url} className="btn btn-primary">
          read more
        </a>
      </div>
    </div>
  );
}

export default NewsItems;
