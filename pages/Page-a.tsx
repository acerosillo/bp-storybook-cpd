import React, { useEffect, useState } from "react";
import Link from "next/link";

const UsingFetch = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>A Random Page pulling in data</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <div>
        {users.length > 0 && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                Name :{user.name} <br /> Email : {user.email} <br />
                <br />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default UsingFetch;
