import React, { useState } from "react";

export default function Invoice() {
  const itemData = {
    item: "",
    price: "",
    quantity: "",
  };
  const [items, setItems] = useState(itemData);
  const [data, setData] = useState([]);

  function handleItemChange(e) {
    const { name, value } = e.target;
    // console.log(e.target.value)
    setItems((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (items.item == "" || items.price == "" || items.quantity == "") {
      alert("Please fill all fields");
      return;
    }

    const newData = {
      id: data.length + 1,
      item: items.item,
      price: items.price,
      quantity: items.quantity,
    };

    setData([...data, newData]);
    setItems(itemData);
    console.log(newData);
  }

  const calculateBill = () => {
    return data.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  };

  const deleteItem = (id) => {
    setData((data) => data.filter((item) => item.id !== id));
  };

  return (
    <div className="invoice-container">
      <div className="invoice">
        <h1>Invoice Generator</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            value={items.item}
            onChange={handleItemChange}
            name="item"
            placeholder="enter Item Name"
          />
          <br />

          <input
            type="number"
            value={items.price}
            onChange={handleItemChange}
            name="price"
            placeholder="enter Price"
          />
          <br />

          <input
            type="number"
            value={items.quantity}
            onChange={handleItemChange}
            name="quantity"
            placeholder="enter quantity"
          />
          <br />
          <button type="submit">Add Item</button>
        </form>
        <div className="invoice-data">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {data.length == 0 ? (
                <tr className="label">
                  <td colSpan={4}>Not a add item!</td>
                </tr>
              ) : (
                data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.item}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <button onClick={() => deleteItem(item.id)}>
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="total-price">
          <p>Total Amount : ₹{calculateBill().toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
