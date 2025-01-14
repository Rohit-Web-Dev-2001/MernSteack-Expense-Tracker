"use client";
import React, { useContext, useEffect, useState } from "react";
import style from "./Style.css";
import Auth from "./Auth/Auth";
import Expense from "./Expense";
import { AuthContext } from "../Context/AuthContext";
const Main = () => {
  const { AuthData } = useContext(AuthContext);

  const [userLoggediN, setuserLoggediN] = useState(null);
  return (
    <>
      {AuthData.userId==''? (
        <Auth setuserLoggediN={setuserLoggediN} />

      ) : (
        <Expense userLoggediN={userLoggediN} />

      )}
      {/* <Expense /> */}
    </>
  );
};

export default Main;
