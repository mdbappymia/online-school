import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const MyContext = createContext();

const AllProvider = ({ children }) => {
  const AllContext = useFirebase();
  return <MyContext.Provider value={AllContext}>{children}</MyContext.Provider>;
};

export default AllProvider;
