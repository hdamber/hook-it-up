import React, { useState, useEffect } from "react";

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  const getAlbums = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/albums");
    let albums = await res.json();
    setAlbums(albums);
  };

  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <div className="container" style={{display: "flex", justifyContent: "center", textAlign: "center"}}>
      <div className="row">
        <div className="col-md-12">
          <ul className="list-group">
          <h2>Albums</h2>
            {albums.map(albums => (
              <li key={albums.id} className="list-group-item">
                {albums.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Albums;
