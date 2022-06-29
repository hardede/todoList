import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Completed from "../pages/Completed/Completed";
import Deleted from "../pages/Deleted/Deleted";
import Home from "../pages/Home";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/completed" element={<Completed />} />
      <Route path="/deleted" element={<Deleted />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="*" element={<Navigate replace to="/home" />} />
    </Routes>
  );
};

export default AppRouter;
