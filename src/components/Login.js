import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { auth, provider } from "../config/firebase";
import { login } from "../features/userSlice";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();

  const signin = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhT9YHoLBqRjYHNsXk0kgBVgHIAg1pd5VxHw&usqp=CAU"
          alt=""
        />
        <h2>Sign in to Gmail Clone</h2>
        <Button variant="contained" color="primary" onClick={signin}>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
