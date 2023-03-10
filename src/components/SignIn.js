import React from "react";
// import firebase from "firebase";
import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

import { auth } from "../firebase";
import { Button } from "@material-ui/core";

function SignIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        // backgroundImage: "url(" + "https://i.redd.it/o67iakxcon571.jpg" + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Button
        style={{
          padding: "30px",
          fontSize: "20px",
          borderRadius: "0",
          fontWeight: "600",
        }}
        onClick={signInWithGoogle}
      >
        Sign in With Google
      </Button>
    </div>
  );
}

export default SignIn;
