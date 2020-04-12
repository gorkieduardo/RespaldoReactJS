import React from "react";

const ListUsers = props => {
  const { listUsers } = props;

  return (
    <div>
      <h2>Lista de usuarios</h2>
      <ul>
        {listUsers.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListUsers;
