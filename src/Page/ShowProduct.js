import moment from "moment";
import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProductFun } from "../Redux/Slices/orderSlice";

function ShowProduct() {
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const splitUrl = window.location.href.split("/");
    if (splitUrl[splitUrl.length - 1] && !order.orderData) {
      dispatch(getProductFun(splitUrl[splitUrl.length - 1]));
    }
  }, [dispatch, order]);

  const data = order.orderData;

  return (
    <>
      {data ? (
        <div className="order-display-conatiner">
          <div className="order-detials">
            <div className="heading">Order Detials</div>
            <div className="customer-data">
              <div>Booking date- </div>
              <div className="data-value">
                {moment(data.createdAt).format("YYYY-MM-DD HH:mm")}
              </div>
            </div>
            <div className="customer-data">
              <div>Customer Name- </div>
              <div className="data-value">{data.customerName}</div>
            </div>
            <div className="small-text mt-2">
              <div>Additional Text- </div>
              <div className="data-value greyed-out">{data.aditionalText}</div>
            </div>
          </div>
          <div className="medicen-list">
            <div className="heading">Order list</div>
            <ul className="list-ul">
              {data.customerOrder.map((m, i) => (
                <li className="item" key={i}>
                  <div className="serial-no">{i + 1}.</div>
                  <div className="med-name">{m.name}</div>
                  <div className="med-quantity">{m.quantity}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}

export default ShowProduct;
