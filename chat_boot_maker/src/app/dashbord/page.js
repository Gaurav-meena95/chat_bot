"use client";
import { AuthContext } from "@/context/auth";
import React, { useContext, useRef, useState } from "react";
import "./dashbord.css";

const Dashboard = () => {
  const globalData = useContext(AuthContext);
  const isloggin = globalData.isloggin;
  // const nameRef = useRef();
  // const textRef = useRef();
  const [chatbots, setChatBot] = useState([]);
  const [botName, setBotName] = useState("");
  const [botContext, setBotContext] = useState("");

  function handleAddBot() {
    if (botName.trim() === "" || botContext.trim() === "") return;
    const newBot = {
      name: botName,
      context: botContext,
    };
    setChatBot((prev) => [...prev, newBot]);
    setBotName("");
    setBotContext("");
  }

  if (!isloggin) {
    return <>Please login</>;
  }
  return (
    <>
      <h1>Chatbot Dashboard</h1>
      <div className="todo">
        <input
          type="text"
          placeholder="chatbot Name"
          onChange={(e) => setBotName(e.target.value)}
          value={botName}
        />
        <textarea
          placeholder="Enter chatbot context"
          onChange={(e) => setBotContext(e.target.value)}
          value={botContext}
        ></textarea>
        <button onClick={handleAddBot} className="btn-todo">
          Add Chatbot
        </button>
      </div>
      <div className="chatprint">
        <h1>Your Chats</h1>
      </div>
    </>
  );
};

export default Dashboard;
