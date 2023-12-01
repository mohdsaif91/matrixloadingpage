import React from "react";
import { Route, Routes } from "react-router-dom";

import PromotionPage from "./Page/PromotionPage";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<PromotionPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
