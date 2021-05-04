import React, { useState } from "react";

let UserContext = React.createContext();

export default UserContext;

export const UserProvider = ({ children }) => {
  const [userList, setUserList] = useState([]);
  const [productList, setProductList] = useState([]);
  return (
    <UserContext.Provider
      value={{ userList, setUserList, productList, setProductList }}
    >
      {children}
    </UserContext.Provider>
  );
};
