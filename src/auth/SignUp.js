import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./signup.css";
import { SignUP } from "../store/services/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authReducer = useSelector((state) => state.authReducer);
  const [inputValue, setInputValue] = useState({});
  const [errors, setErrors] = useState("");

  useEffect(() => {
    if (Object.keys(authReducer).length > 0) {
      if (authReducer.error) {
        toast.error(authReducer.error);
      }
      if (authReducer.data) {
        navigate("/sign-in");
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
    if (inputValue && !inputValue.username) {
      formIsValid = false;
      errors["username"] = "*Please enter username!";
    }

    if (inputValue && !inputValue.phone) {
      formIsValid = false;
      errors["phone"] = "*Please enter phone number!";
    }

    if (inputValue && !inputValue.useremail) {
      formIsValid = false;
      errors["useremail"] = "*Please enter email!";
    } else if (
      inputValue.useremail &&
      !inputValue.useremail.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      formIsValid = false;
      errors["useremail"] = "*Please enter vaild email id!";
    }

    if (inputValue && !inputValue.password) {
      formIsValid = false;
      errors["password"] = "*Please enter phone number!";
    }
    setErrors(errors);
    return formIsValid;
  };

  const onlyNumberKey = (evt) => {
    var ASCIICode = evt.which ? evt.which : evt.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
      evt.preventDefault();
    }
  };

  const formSignUp = () => {
    if (validateForm()) {
      dispatch(SignUP(inputValue));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (validateForm()) {
        dispatch(SignUP(inputValue));
      }
    }
  };
  return (
    <div className="signup-container w-100 d-flex justify-content-center align-items-center ">
      <div className="col-5">
        <h3>Sign Up</h3>
        <div className="mb-3" onKeyDown={handleKeyDown}>
          <label>User Name</label>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Enter User Name"
            onChange={(e) => handleOnChnage(e)}
          />
          <span className="text-danger"> {errors["username"]}</span>
        </div>
        <div className="mb-3" onKeyDown={handleKeyDown}>
          <label>Email address</label>
          <input
            type="text"
            name="useremail"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => handleOnChnage(e)}
          />
          <span className="text-danger"> {errors["useremail"]}</span>
        </div>
        <div className="mb-3" onKeyDown={handleKeyDown}>
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="Enter Phone Number"
            onChange={(e) => handleOnChnage(e)}
            onKeyPress={onlyNumberKey}
            maxLength={10}
          />
          <span className="text-danger"> {errors["phone"]}</span>
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
            onClick={() => formSignUp()}
          >
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </div>
    </div>
  );
}
