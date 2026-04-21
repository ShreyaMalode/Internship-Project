import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Browse from "./Browse";
function Body() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Body;
