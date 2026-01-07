import React from "react";
import "../styles/userTable.css";
export default function userTable({ users, onChange, onDelete }) {
  if (users.length == 0) {
    return <div className="no-user">No users found!</div>;
  }
  return (
    <div className="user-data">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.name + " " + user.sname}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>{user.gender}</td>
              <td>
                <div className="action-btn">
                  <button onClick={() => onChange(user)}>
                    <i className="fa-solid fa-pen"></i>
                  </button>
                  <button onClick={() => onDelete(user.id)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
