"use client";

// import { API } from "@/Utils/Utils";
import axios from "axios";
const { createContext, useReducer } = require("react");

// intial state
let initialState = {};

if (typeof window != "undefined") {
  initialState = JSON.parse(localStorage.getItem("ExpenseAuth")) || {
    userId: "",
    Username: "",
  };
} else {
  initialState = {
    userId: "",
    Username: "",
  };
}

// creact Context
export const AuthContext = createContext(initialState);

// Reducers
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
      const singinState = action.payload;
      localStorage.setItem("ExpenseAuth", JSON.stringify(singinState));
      return singinState;

    default:
      return state;
  }
};

// Provider component

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Authenitcator methods
  const SignUp = async (body) => {
    try {
      const res = await axios.post("https://mernstack-expense-tracker-beckend.vercel.app/auth/SignUp", body);
      alert(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  // SignIN method
  const SignIn = async (body) => {
    try {
      const res = await axios.post("https://mernstack-expense-tracker-beckend.vercel.app/auth/SignIn", body);
      if (res.data === "User not founded") {
        return res.data;
      } else {
        dispatch({ type: "SIGN_IN", payload: res.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        AuthData: state,
        dispatch,
        SignUp,
        SignIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
