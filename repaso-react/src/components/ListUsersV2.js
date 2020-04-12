import React from "react";

const ListUsersV2 = props => {
  const { employees } = props;

  return (
    <div>
      <h2>Lista de usuarios V2</h2>
      <ul>
        {employees.map((user, index) => (
          <li key={index}>
            {user.name} - {user.edad}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListUsersV2;
