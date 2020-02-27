import React, { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await res.json();
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container" style={{display: "flex", justifyContent: "center", textAlign: "center"}}>
      <div className="row">
        <div className="col-md-12">
          <ul className="list-group">
          <h2>Users</h2>
            {users.map(user => (
              <li key={user.id} className="list-group-item">
                {user.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Users;
