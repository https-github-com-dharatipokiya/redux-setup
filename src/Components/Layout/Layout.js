import React from "react";
import Header from "../Common/Header";
import Sidebar from "../Common/Sidebar";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Sidebar />
      {children}
    </div>
  );
}
