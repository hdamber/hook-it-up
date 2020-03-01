import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await res.json();
    setUsers(users);

  };
    getUsers();
  }, []);

  return users.map(user => {
    return (
      <div className="container" style={{ display: "flex", justifyContent: "center" }}>
        <div key={user.id} className="card" style={{ width: "300px", height: "200px" }}>
            <div className="card-body" style={{ display: "flex", flexDirection: "column"}}>
                <h5 className="card-title" style={{ display: "flex", justifyContent: "center"}}>{user.className}</h5>
                <h6 className="card-subtitle mb-2" style={{ display: "flex", justifyContent: "center"}}>{user.email}</h6>
                <Link to={`/${user.id}/details`} className="card-link" style={{ display: "flex", justifyContent: "center"}}>Learn More</Link>
            </div>
        </div>
        </div>
    )
  });
};
