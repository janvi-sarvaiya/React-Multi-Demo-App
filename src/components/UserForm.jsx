import React, { useEffect, useState } from "react";
import "../styles/userForm.css";

export default function UserForm({ onAddUser, editUser }) {
  const userData = {
    name: "",
    sname: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
  };
  const [user, setUser] = useState(userData);
  const [error, setError] = useState({});

  useEffect(() => {
    if (editUser) {
      setUser(editUser);
    } else {
      setUser(userData);
    }
  }, [editUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setUser(userData);
  };

  function validateName() {
    const newError = {};
    const phoneValidate = /^\d{10}$/;
    if (user.name == "") {
      newError.name = "name is required!";
    }
    if (user.sname == "") {
      newError.sname = "Surname is required!";
    }
    if (user.email == "") {
      newError.email = "email is required!";
    }
    if (user.phone == "") {
      newError.phone = "phone no. is required!";
    } else if (!phoneValidate.test(user.phone)) {
      newError.phone = "phone no. must be 10 digits!";
    }

    if (user.address == "") {
      newError.address = "address is required!";
    }
    if (user.gender == "") {
      newError.gender = "gender is required!";
    }
    setError(newError);
    return Object.keys(newError).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateName()) {
      onAddUser(user);
      setUser(userData);
      console.log(editUser ? "Edit User : " : "Add User : ", user);
    }
  };

  return (
    <div className="form">
      <form action="" onSubmit={handleSubmit} className="user-form">
        <h1>{editUser ? "Edit User" : "User information"}</h1>
        <label htmlFor="">Name : </label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        {error.name && <p className="error">{error.name}</p>}
        <br />

        <label htmlFor="">SurName : </label>
        <input
          type="text"
          name="sname"
          value={user.sname}
          onChange={handleChange}
        />
        {error.sname && <p className="error">{error.sname}</p>}
        <br />

        <label htmlFor="">Email :</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        {error.email && <p className="error">{error.email}</p>}
        <br />

        <label htmlFor="">phone no. : </label>
        <input
          type="number"
          name="phone"
          value={user.phone}
          onChange={handleChange}
        />
        {error.phone && <p className="error">{error.phone}</p>}
        <br />

        <label htmlFor="">Address : </label>
        <textarea
          name="address"
          cols="25"
          rows="4"
          value={user.address}
          onChange={handleChange}
        ></textarea>
        {error.address && <p className="error">{error.address}</p>}
        <br />

        <label htmlFor="">Gender :</label>
        <select name="gender" id="" value={user.gender} onChange={handleChange}>
          <option value="" selected disabled>
            Select gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {error.gender && <p className="error">{error.gender}</p>}
        <br />

        <div className="btn-group">
          <button type="submit">{editUser ? "Update" : "Submit"}</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
