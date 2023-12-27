import React from "react";
import LoginSignup from "./LoginSignup";
import { Route, Routes } from "react-router-dom";
import ImageSearch from "./ImageSearch";
const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/ImageSearch" element={<ImageSearch />} />
      </Routes>
    </div>
  );
};

export default Content;
