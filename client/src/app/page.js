"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import dynamic from "next/dynamic";
import {TransactionProvider} from "./Context/ExpenseContext";
import {AuthContextProvider} from "./Context/AuthContext";
const NoSSR = dynamic(() => import("./components/Main"), { ssr: false });
const page = () => {
  return (
    <>
      <AuthContextProvider>
      <TransactionProvider>
        <NoSSR/>
      </TransactionProvider>
      </AuthContextProvider>
    </>
  );
};

export default page;
