import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Header from "./components/head.jsx";
import Body from "./components/body.jsx";
import WatchPage from "./components/watchPage.jsx";

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
          <Route path="watch" element={ <WatchPage/>}    />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
