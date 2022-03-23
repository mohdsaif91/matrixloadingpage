import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setTab } from "../Redux/Slices/utilSlice";
import GenerateOrder from "./GenerateOrder";
import OrderTable from "./OrderTable";

function AdminHome() {
  const tabIndex = useSelector((state) => state.util);
  const dispatch = useDispatch();
  return (
    <div className="admin-home header-margin">
      <div className="tab-link">
        <div className="link primary" onClick={() => dispatch(setTab(0))}>
          Generate-Order
        </div>
        <div className="link danger" onClick={() => dispatch(setTab(1))}>
          View-Order
        </div>
      </div>
      <div className="tab-pages">
        {tabIndex.index === 0 ? (
          <div>
            <GenerateOrder />
          </div>
        ) : (
          <div>
            <OrderTable />
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminHome;
