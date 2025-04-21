"use client";
import Link from "next/link";
import React, { useContext } from "react";
import "./Navbar.css";
import { AuthContext } from "@/context/auth";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { isloggin, setIsloggin } = useContext(AuthContext);
  const router = useRouter();

  function handleLogin() {
    router.push("/auth/login");
  }
  return (
    <div className="nabar">
      <div className="logo">
        <h1>My App</h1>
      </div>
      <div className="link">
        <Link className="nav-link" href="/home">
          Home
        </Link>
        <Link className="nav-link" href="/about">
          About
        </Link>
        <Link className="nav-link" href="/dashboard">
          Dashboard
        </Link>
        {isloggin ? (
          <button className="btn-login-nav">Logout</button>
        ) : (
          <button className="btn-login-nav" onClick={handleLogin}>
            Login
          </button>
        )}
      </div>
    </div>
  );
}
