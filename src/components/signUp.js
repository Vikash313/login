import React from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log("data", data);
    localStorage.setItem("lists", JSON.stringify(data));
  };

  return (
    <div>
      <h2>SignUp Form</h2>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="fname">
            <b>FullName</b>
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter fullName"
            name="fName"
            {...register("fName", { required: true, maxLength: 30 })}
          />
          <br />
          <label htmlFor="fname">
            <b>Mobile Number</b>
          </label>
          <br />
          <input
            type="tel"
            placeholder="Mobile number"
            name="mNumber"
            {...register("mNumber", {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
          /><br/>
          <label htmlFor="uname">
            <b>Email</b>
          </label>
          <br />
          <input
            type="email"
            placeholder="Enter Username"
            name="email"
            {...register("email", { required: true })}
          />
          <br />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            {...register("password", { required: true })}
          />
          <br />

          <button type="submit">SignUp</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
