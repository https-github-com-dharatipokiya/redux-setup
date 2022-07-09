import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import NotFoundPage from "./NotFoundPage";

export default function index() {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}
