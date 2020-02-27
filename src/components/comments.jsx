import React, { useState, useEffect } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/comments");
    let comments = await res.json();
    setComments(comments);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="container" style={{display: "flex", justifyContent: "center", textAlign: "center"}}>
      <div className="row">
        <div className="col-md-12">
          <ul className="list-group">
              <h2>Comments</h2>
            {comments.map(comments => (
              <li key={comments.id} className="list-group-item">
                {comments.name}
                {comments.email}
                {comments.body}
            
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Comments;
