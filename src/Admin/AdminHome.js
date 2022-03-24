import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { getProductBydateFilterFun } from "../Redux/Slices/orderSlice";
import { setTab } from "../Redux/Slices/utilSlice";
import GenerateOrder from "./GenerateOrder";
import OrderTable from "./OrderTable";

const initialFilter = {
  startDate: moment().startOf("day").toDate(),
  endDate: moment().endOf("day").toDate(),
};

function AdminHome() {
  const [filter, setFilter] = useState({ ...initialFilter });

  const tabIndex = useSelector((state) => state.util);
  const tableData = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!tableData.filteredData) {
      dispatch(getProductBydateFilterFun(filter));
    }
  }, [tableData]);

  return (
    <div className="admin-home header-margin">
      <div className="tab-link">
        <div className="link grey" onClick={() => dispatch(setTab(0))}>
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
