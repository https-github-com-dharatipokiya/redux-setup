import React, { useState, useEffect } from "react";
import "./signin.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SignIN } from "../store/services/auth";
import { toast } from "react-toastify";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authReducer = useSelector((state) => state.authReducer);
  const [inputValue, setInputValue] = useState({});
  const [errors, setErrors] = useState("");

  console.log("authReducer", authReducer);

  useEffect(() => {
    if (Object.keys(authReducer).length > 0) {
      if (authReducer.error) {
        toast.error(authReducer.error);
      }
      if (authReducer.data) {
        navigate("/home");
      }
    }
  }, [authReducer]);

  const handleOnChnage = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};
    if (inputValue && !inputValue.email) {
      formIsValid = false;
      errors["email"] = "*Please enter email!";
    } else if (
      inputValue.email &&
      !inputValue.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      formIsValid = false;
      errors["email"] = "*Please enter vaild email id!";
    }

    if (inputValue && !inputValue.password) {
      formIsValid = false;
      errors["password"] = "*Please enter phone number!";
    }
    setErrors(errors);
    return formIsValid;
  };

  const formSignin = () => {
    if (validateForm()) {
      dispatch(SignIN(inputValue));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (validateForm()) {
        dispatch(SignIn(inputValue));
      }
    }
  };
  return (
    <div>
      <div className="signin-container w-100 d-flex justify-content-center align-items-center ">
        <div className="col-5">
          <h3>Sign In</h3>
          <div className="mb-3" onKeyDown={handleKeyDown}>
            <label>Email address</label>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => handleOnChnage(e)}
            />
            <span className="text-danger"> {errors["email"]}</span>
          </div>
          <div className="mb-3" onKeyDown={handleKeyDown}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => handleOnChnage(e)}
            />
            <span className="text-danger"> {errors["password"]}</span>
          </div>
          <div>
            <button
              className="btn btn-primary text-center"
              onClick={() => formSignin()}
            >
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Create Account <a href="/">sign up?</a>
          </p>
        </div>
      </div>
    </div>
  );
}
