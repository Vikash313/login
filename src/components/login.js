import React, { useState } from "react";
import { useHistory } from "react-router";
import "../assets/login.css";
import { useForm } from "react-hook-form";
import * as data from "../assets/data.json";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, handleSubmit, errors } = useForm();
  console.log("errors", errors)

  const onSubmit = () => {
    if (email && password) {
      var userName = data?.default?.find(
        (userObj) => userObj.email === email && userObj.password === password
      );
      console.log("userName", userName);
      if (userName) {
        history.push({ pathname: "/welcome", state: userName });
      } else {
        history.push("/register");
      }
    }
  };


  return (
    <div>
      <h1>Login Page</h1>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label for="uname">
            <b>Username</b>
          </label>
          <br />
          <input
            type="email"
            placeholder="Enter Username"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            //{...register("email", { required: true })}
          />
          <br />

          <label for="psw">
            <b>Password</b>
          </label>
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            // {...register("password", { required: true })}
          />
          <br />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
