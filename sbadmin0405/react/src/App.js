// importing modules and methods
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserProvider } from "./usercontext";

// importing components
import Navbar from "./component/navbar";
import Sidebar from "./component/sidebar";
import Dashboard from "./component/dashboard";
import Footer from "./component/footer";
import ListUsers from "./users/ListUser";
import CreateUser from "./users/CreateUser";
import UpdateUser from "./users/UpdateUser";
import ListProducts from "./products/list";
import CreateProduct from "./products/create";
import EditProduct from "./products/edit";

export default function App() {
  return (
    <Router>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar></Navbar>
            <div className="container-fluid">
              <UserProvider>
                <Switch>
                  <Route path="/" component={Dashboard} exact={true}></Route>
                  <Route
                    path="/dashboard"
                    component={Dashboard}
                    exact={true}
                  ></Route>
                  <Route
                    path="/users"
                    component={ListUsers}
                    exact={true}
                  ></Route>
                  <Route
                    path="/createuser"
                    component={CreateUser}
                    exact={true}
                  ></Route>
                  <Route
                    path="/updateuser/:id"
                    component={UpdateUser}
                    exact={true}
                  ></Route>
                  <Route
                    path="/products"
                    component={ListProducts}
                    exact={true}
                  ></Route>
                  <Route
                    path="/createproduct"
                    component={CreateProduct}
                    exact={true}
                  ></Route>
                  <Route
                    path="/editproduct/:id"
                    component={EditProduct}
                    exact={true}
                  ></Route>
                </Switch>
              </UserProvider>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </Router>
  );
}
