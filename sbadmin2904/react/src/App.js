import React from "react";

import Navbar from "./component/navbar";
import Sidebar from "./component/sidebar";
import Dashboard from "./component/dashboard";
import Footer from "./component/footer";

export default function App() {
  return (
    <div id="wrapper">
      <Sidebar></Sidebar>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar></Navbar>
          <div className="container-fluid">
            <Dashboard></Dashboard>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
