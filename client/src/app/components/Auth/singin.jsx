import React, { useContext, useState } from "react";
import style from "./Auth.css";
import { AuthContext } from "../../Context/AuthContext";

const SingIn = (props) => {
  const { setshowloginform, setuserLoggediN,} = props;
  const { SignIn, dispatch } = useContext(AuthContext);
  const [form, setform] = useState({});
  const handleSubmit =  async(e) => {
    e.preventDefault();
    const data = await SignIn(form);
    if(data ==="User not founded"){
      alert("Error: Email or Password does'nt exists")
      setshowloginform(true)
    }
    
  };
  return (
    <div className="formcomponent">
      <div className="Authcontainer shadow-lg">
        {" "}
        <h2 className="text-warning text-center">Sign in</h2>{" "}
        <h6 className="text-black-50 text-center">
          to continue to Expense Tracker
        </h6>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            {" "}
            <label htmlFor="email">Email</label>{" "}
            <input
              className="shadow-sm"
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              onChange={(e) => {
                setform((prev) => {
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
              name="password"
              autoComplete="off"
              onChange={(e) => {
                setform((prev) => {
                  return { ...prev, Password: e.target.value };
                });
              }}
              required
            />{" "}
          </div>{" "}
          <button className="bg-warning shadow-lg" type="submit">
            Log in
          </button>{" "}
        </form>{" "}
        <div className="d-flex justify-content-end p-1">
          <h6
            className="mt-4 "
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              setshowloginform(false);
            }}
          >
            {" "}
            Create an account?
          </h6>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
