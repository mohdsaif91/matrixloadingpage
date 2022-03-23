import React, { useEffect, useState } from "react";

import plus from "../assets/admin/plus.png";
import minus from "../assets/admin/minus.png";
import { numberValidation } from "../util/data";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerOrder } from "../Redux/Slices/orderSlice";

const initialOrderData = {
  customerName: "",
  createdAt: new Date(),
  customerOrder: [],
};

function GenerateOrder() {
  const [order, setOrder] = useState({ ...initialOrderData });
  const [medicen, setMedicen] = useState({ name: "", quantity: 0 });
  const [showUrl, setShowUrl] = useState(false);

  const customerOrder = useSelector((state) => state.order);
  console.log(customerOrder);

  const dispatch = useDispatch();

  const reduceQuantity = (e) => {
    if (medicen.quantity >= 1) {
      setMedicen({
        ...medicen,
        quantity: medicen.quantity - 1,
      });
    }
  };

  const addInOrderArray = () => {
    console.log(medicen);
    setOrder({ ...order, customerOrder: [...order.customerOrder, medicen] });
  };

  const removeMed = (index) => {
    const removedOrder = order.customerOrder.filter((f, i) => i !== index);
    setOrder({
      ...order,
      customerOrder: [...removedOrder],
    });
  };

  const createOrder = () => {
    dispatch(addCustomerOrder(order));
  };

  return (
    <div className="customer-order">
      <div className="order-form">
        <div className="form-item">
          <label className="input-label">Customer Name</label>
          <input
            className="input-item"
            name="customerName"
            value={order.customerName}
            onChange={(e) =>
              setOrder({ ...order, customerName: e.target.value })
            }
          />
        </div>
        <div className="form-item changes-conatiner">
          <label className="input-label">Medicen Name</label>
          <input
            className="input-item"
            name="customerName"
            value={medicen.name}
            onChange={(e) => setMedicen({ ...medicen, name: e.target.value })}
          />
          <div className="medicen-container">
            <div className="operation-container">
              <button
                onClick={() =>
                  setMedicen({ ...medicen, quantity: medicen.quantity + 1 })
                }
                className="link btn"
              >
                <img src={plus} />
              </button>
              <input
                className="input-item quantity-input"
                name="customerName"
                value={medicen.quantity}
                onChange={(e) => {
                  if (numberValidation(e.target.value)) {
                    setMedicen({ ...medicen, quantity: e.target.value });
                  }
                }}
              />
              <button className="link btn" onClick={() => reduceQuantity()}>
                <img src={minus} />
              </button>
            </div>
            <button
              disabled={medicen.quantity === 0}
              className={` add-medicen ${medicen.quantity === 0 && "disabled"}`}
              onClick={() => addInOrderArray()}
            >
              Add Medicen
            </button>
          </div>
        </div>
      </div>
      <div className="added-medicen-list">
        <div
          className={`add-btn-container ${
            order.customerOrder.length === 0 && "none"
          }`}
        >
          <button
            className="primary link"
            onClick={() => createOrder()}
            disabled={order.customerOrder.length === 0}
          >
            Create Order
          </button>
        </div>
        <ul
          className={`ul-list ${
            order.customerOrder.length !== 0 ? "block" : "none"
          }`}
        >
          {order.customerOrder.map((m, i) => (
            <li key={i} className="list-li">
              <div className="med-name">{m.name}</div>
              <div className="med-quantity">{m.quantity}</div>
              <button
                className="remove-medicen danger"
                onClick={() => removeMed(i)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        {customerOrder.generatedOrder &&
          `${window.location.href}/${customerOrder.generatedOrder._id}`}
      </div>
    </div>
  );
}

export default GenerateOrder;
