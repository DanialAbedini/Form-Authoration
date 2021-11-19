import React from "react";

import { Route, Routes } from "react-router-dom";

import SignUp from "./SignUp";
import Login from "./Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
