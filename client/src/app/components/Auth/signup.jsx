import { React, useContext, useState, useRef } from "react";
import style from "./Auth.css";
import { AuthContext } from "../../Context/AuthContext";

const SignUp = (props) => {
  const { setshowloginform } = props;
  const { SignUp } = useContext(AuthContext);
  const [sinupform, setsinupform] = useState({
    Username: "",
    Email: "",
    Password: "",
  });
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const handleClear = () => {
    input1Ref.current.value = "";
    input2Ref.current.value = "";
    input3Ref.current.value = "";
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    const res = await SignUp(sinupform);
    if (res === "Email Already Exists") {
      setshowloginform(false);
      handleClear();
    } else {
      setshowloginform(true);
      handleClear();
    }
  };
  return (
    <>
      <div className="formcomponent" onSubmit={handlesubmit}>
        <div className="Authcontainer shadow-lg">
          {" "}
          <h2 className="text-warning text-center">
            Create a new account
          </h2>{" "}
          <form>
            {" "}
            <div className="input-container">
              {" "}
              <label htmlFor="username">Username</label>{" "}
              <input
                className="shadow-sm"
                type="text"
                id="username"
                name="username"
                ref={input1Ref}
                autoComplete="off"
                onChange={(e) => {
                  setsinupform((prev) => {
                    return { ...prev, Username: e.target.value };
                  });
                }}
                required
              />{" "}
            </div>{" "}
            <div className="input-container">
              {" "}
              <label htmlFor="email">Email</label>{" "}
              <input
                className="shadow-sm"
                type="email"
                id="email"
                autoComplete="off"
                ref={input2Ref}
                name="email"
                onChange={(e) => {
                  setsinupform((prev) => {
                    return { ...prev, Email: e.target.value };
                  });
                }}
                required
              />{" "}
            </div>{" "}
            <div className="input-container">
              {" "}
              <label htmlFor="password">Password</label>{" "}
              <input
                className="shadow-sm"
                type="password"
                id="password"
                autoComplete="off"
                ref={input3Ref}
                name="password"
                required
                onChange={(e) => {
                  setsinupform((prev) => {
                    return { ...prev, Password: e.target.value };
                  });
                }}
              />{" "}
            </div>{" "}
            <button className="bg-warning shadow-lg" type="submit">
              Sign Up
            </button>{" "}
          </form>{" "}
          <div className="d-flex justify-content-end p-1">
            <h6
              className="mt-4 "
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                setshowloginform(true);
              }}
            >
              {" "}
              Already have an account?
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
