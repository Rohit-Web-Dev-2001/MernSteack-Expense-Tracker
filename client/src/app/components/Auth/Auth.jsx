import React, { useState } from "react";
import SingIn from "./singin";
import SignUp from "./signup";
const Auth = ({setuserLoggediN}) => {
  const [ showloginform, setshowloginform ]= useState(true);
  return (
    <>
      {showloginform ? (
        <SingIn setshowloginform={setshowloginform} setuserLoggediN={setuserLoggediN} />
      ) : (
        <SignUp setshowloginform={setshowloginform} />  
      )}
    </>
  );
};

export default Auth;
