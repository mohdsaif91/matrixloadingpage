import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import AdminHeader from "./Admin/AdminHeader";
import AdminHome from "./Admin/AdminHome";
import Footer from "./Component/Footer";

import Header from "./Component/Header";
import LoadingIndicator from "./Component/LoadingIndicator";
import Login from "./Component/Login";
import PromotionPage from "./Page/PromotionPage";
import ShowProduct from "./Page/ShowProduct";

function App() {
  const location = useLocation();
  const loading = useSelector((state) => state.loading);
  const navigate = useNavigate();

  const loginData = useSelector((state) => state.login);

  useEffect(() => {
    if (loginData.loggedIn) {
      navigate("/adminhome");
    }
  }, [loginData]);

  return (
    <div className="App">
      {loading.loading ? (
        <LoadingIndicator />
      ) : (
        <>
          <div>
            {location.pathname ===
            "/login" ? null : !location.pathname.includes("admin") ? (
              <Header />
            ) : (
              <AdminHeader />
            )}
          </div>

          <Routes>
            <Route path="/" element={<PromotionPage />} />
            <Route path="login" element={<Login />} />
            <Route path="/:productId" element={<ShowProduct />} />
            {/* admin */}
            <Route path="adminhome" element={<AdminHome />} />
          </Routes>
          {location.pathname === "/login" ||
          location.pathname.includes("admin") ? null : (
            <Footer />
          )}
        </>
      )}
    </div>
  );
}

export default App;
