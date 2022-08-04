import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home'
import SignIn from './components/SignIn'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}