import React, { useState, useMemo } from "react";
import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";
import { SearchData, OrderData } from "../components/SearchData";
import "../App.css";

export default function Form() {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState(1);
  const [editIndex, setEditIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [orderData, setOrderData] = useState("");
  
  const addUser = (data) => {
    if (editIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = { ...data, id: users[editIndex].id };
      setUsers(updatedUsers);
      setEditIndex(null);
    } else {
      const newUser = { ...data, id: id };
      setUsers((prev) => [...prev, newUser]);
      setId((newId) => newId + 1);
    }
  };

  function deleteUser(id) {
    setUsers((prevUser) => prevUser.filter((user) => user.id !== id));
  }

  function updateUser(data) {
    const index = users.findIndex((user) => user.id === data.id);
    setEditIndex(index);
  }
  const filterData = useMemo(() => {
    const searchData = search.toLowerCase();
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchData) ||
        user.sname.toLowerCase().includes(searchData)
    );
  }, [users, search]);

  const orderName = useMemo(() => {
    const sortData = [...filterData];
    if (orderData === "aname") {
      return filterData.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (orderData === "dname") {
      return filterData.sort((a, b) => b.name.localeCompare(a.name));
    }
    return sortData;
  }, [filterData, orderData]);

  return (
    <div>
      <div className="container">
        <UserForm
          onAddUser={addUser}
          editUser={editIndex !== null ? users[editIndex] : null}
        />
        <div className="show-data">
          <SearchData
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <OrderData
            onChange={(e) => setOrderData(e.target.value)}
            value={orderData}
          />
          <UserTable
            users={orderName}
            onDelete={deleteUser}
            onChange={updateUser}
          />
        </div>
      </div>
    </div>
  );
}
