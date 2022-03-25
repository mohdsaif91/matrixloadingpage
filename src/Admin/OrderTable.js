import React, { useEffect, useMemo, useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useTable } from "react-table";

import "react-datepicker/dist/react-datepicker.css";

import { getProductBydateFilterFun } from "../Redux/Slices/orderSlice";
import Eyes from "../assets/admin/eyes-look.png";
import copy from "../assets/admin/copy-icon.png";
import ModalPopup from "./ModalPopup";
import ReactSelect from "react-select";
import LoadingIndicator from "../Component/LoadingIndicator";

const initialFilter = {
  startDate: moment().startOf("day").toDate(),
  endDate: moment().endOf("day").toDate(),
  customerName: { label: "", value: "" },
};

const initialModal = {
  show: false,
  data: {},
};

function OrderTable() {
  const [filter, setFilter] = useState({ ...initialFilter });
  const [modal, setModal] = useState({ ...initialModal });
  const [active, setActive] = useState({ show: false, id: "" });

  const tableData = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!filter.customerName) {
      setFilter({ ...filter, customerName: { label: "", value: "" } });
    }
    let newFilter = {};
    if (filter.customerName && filter.customerName.value !== "") {
      newFilter.customerName = filter.customerName.value;
    }
    newFilter.createdAt = {
      $gte: filter.startDate,
      $lte: filter.endDate,
    };
    dispatch(getProductBydateFilterFun(newFilter));
  }, [filter]);

  const generateUrl = (id) => {
    const url = window.location.href;
    return `https://${url.split("/")[2]}/${id}`;
  };

  const copyUrl = (id) => {
    setActive({ ...active, show: true, id });
    const url = window.location.href;
    navigator.clipboard.writeText(`https://${url.split("/")[2]}/${id}`);
    setTimeout(() => {
      setActive({ show: false, id: "" });
    }, [3000]);
  };

  const customerOptions = tableData.customerName
    ? tableData.customerName.map((m) => {
        return {
          label: m,
          value: m,
        };
      })
    : [];

  const openModal = (id) => {
    window.scrollTo(0, 0);
    const selectedOrder = tableData.filteredData.find((f) => {
      return f._id === id;
    });
    console.log(selectedOrder, " found");
    setModal({ ...modal, show: true, data: selectedOrder });
  };

  const columns = useMemo(
    () => [
      {
        Header: "Created At",
        accessor: ({ createdAt }) => (
          <div>{moment(createdAt).format("DD/MM/yyyy HH:mm")}</div>
        ),
      },
      {
        Header: "Customer Name",
        accessor: "customerName",
      },
      {
        Header: "Order count",
        accessor: ({ customerOrder, _id }) => (
          <div className="order-cell">
            <div>{customerOrder.length || 0}</div>
            <img alt="" src={Eyes} onClick={() => openModal(_id)} />
          </div>
        ),
      },
      {
        Header: "Order Url",
        accessor: ({ _id }) => (
          <div className="order-cell">
            <div>{generateUrl(_id)}</div>
            <img
              alt=""
              className="copy-icon"
              onClick={() => copyUrl(_id)}
              src={copy}
            />
            {active.id === _id && <span className="copy-text"> Copied !</span>}
          </div>
        ),
      },
      {
        Header: "Aditional Message",
        className: "aditional-text",
        minWidth: 180,
        width: 280,
        accessor: ({ aditionalText }) => (
          <div className="aditional-text">{aditionalText}</div>
        ),
      },
    ],
    []
  );

  const data = tableData.filteredData ? tableData.filteredData : [];

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div className="order-table-container">
      <div className="table-element">
        <div className="table-filter-container">
          <div className="date-picker-container">
            <label>Start Date</label>
            <DatePicker
              dateFormat="dd/MM/yyyy HH:mm"
              selected={filter.startDate}
              className="date-picker"
              showTimeSelect={true}
              onChange={(date) => setFilter({ ...filter, startDate: date })}
            />
          </div>
          <div className="date-picker-container">
            <label>Start Date</label>
            <DatePicker
              dateFormat="dd/MM/yyyy HH:mm"
              selected={filter.endDate}
              className="date-picker"
              showTimeSelect={true}
              onChange={(date) => setFilter({ ...filter, endDate: date })}
            />
          </div>
          <div className="date-picker-container">
            <label>Customer name</label>
            <ReactSelect
              defaultValue={{ label: "Customer Name", value: "Customer Name" }}
              options={customerOptions}
              className="customer-name"
              value={filter.customerName}
              onChange={(date) => setFilter({ ...filter, customerName: date })}
              isClearable={true}
            />
          </div>
        </div>
        {tableData.loading ? (
          <LoadingIndicator />
        ) : (
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps({
                        style: {
                          minWidth: column.minWidth,
                          width: column.width,
                        },
                      })}
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      {modal.show && (
        <ModalPopup
          closeModal={() => setModal({ ...initialModal })}
          data={modal.data}
        />
      )}
    </div>
  );
}

export default OrderTable;
