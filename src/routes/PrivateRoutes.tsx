import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Overlay from "../components/Overlay";
import Home from "../pages/Home";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import CreateProfile from "../pages/CreateProfile";

export default function PrivateRoutes() {
    const overlay = useSelector((state:RootState)=>state.overlay)
  return (
    <>
    {!!overlay.blocked && <Overlay/>}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/create-profile" element={<CreateProfile/>}/>
      <Route path="*" element={<Navigate to='/'/>} />
    </Routes>
    </>
  );
}
