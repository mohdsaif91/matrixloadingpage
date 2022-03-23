import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import logout from "../assets/admin/logout.png";
import { logoutUser } from "../Redux/Slices/loginSlice";

function AdminHeader() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUserFun = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <div className="admin-header">
      <div className="logo-container">
        <div className="logo">Matrix Pharmacy</div>
      </div>
      <div className="logout-div">
        <img
          onClick={() => logoutUserFun()}
          src={logout}
          className="logout-img"
        />
      </div>
    </div>
  );
}

export default AdminHeader;
