import React from "react";

export function SearchData({ onChange, value }) {
  return (
    <div className="search-data">
      <label htmlFor="">Search Name : </label>
      <input
        type="text"
        placeholder="Search Name"
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export function OrderData({ onChange, value }) {
  return (
    <div className="search-data">
      <label htmlFor="">Order Name : </label>
      <select name="gender" id="" value={value} onChange={onChange}>
        <option value="" selected disabled>
          Select order
        </option>
        <option value="aname">Ascending name</option>
        <option value="dname">descending name</option>
      </select>
    </div>
  );
}
