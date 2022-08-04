import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import MyDocument from "./components/MyDocument";

export default function App() {
  return (
    <>
      <div>Satoyama Home Page</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/document" element={<MyDocument />} />
      </Routes>
    </>
  );
}
