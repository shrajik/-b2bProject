import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Chat from "./Pages/Chat";
import Homepage from "./Pages/Homepage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Register" element={<Register />} />
        <Route path="Login" element={<Login />} />
        <Route path="Chat" element={<Chat />} />
        <Route path="Homepage" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}
