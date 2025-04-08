"use client";
import Link from "next/link";
import React, { useContext } from "react";
import "./Navbar.css";
import Login from "@/app/auth/login/page";
import AuthProvider, { AuthContext } from "@/context/auth";

export default function Navbar() {
  const { isloggin } = useContext(AuthContext);

  return (
    <html>
      <div className="nabar">
        <div className="logo">
          <h1>My App</h1>
        </div>
        <div className="link">
          <Link className="nav-link" href="/">
            Home
          </Link>
          <Link className="nav-link" href="/">
            About
          </Link>
          <Link className="nav-link" href="/">
            Dashboard
          </Link>
          <button className="btn-login-nav">
            {isloggin ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </html>
  );
}
