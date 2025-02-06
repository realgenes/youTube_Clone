import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Header from "./components/head.jsx";
import Body from "./components/body.jsx";
import Watch from "./components/watchPage.jsx";
import SideBar from "./components/SideBar.jsx";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Body />} />
          <Route path="/watch" element={<Watch/>}   />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
