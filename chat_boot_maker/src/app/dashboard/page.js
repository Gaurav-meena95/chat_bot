"use client";
import { AuthContext } from "@/context/auth";
import React, { useContext, useRef, useState } from "react";
import "./dashbord.css";
import { useRouter } from "next/navigation";
import { createChatbot } from "@/services/chatbot";
import { getToken } from "@/helpers/auth";

const Dashboard = () => {
  const router = useRouter();
  const globalData = useContext(AuthContext);
  const isloggin = globalData.isloggin;
  const [chatbots, setChatBot] = useState([]);
  const [botName, setBotName] = useState("");
  const [botContext, setBotContext] = useState("");
  async function handleAddBot() {
    if (botName.trim() === "" || botContext.trim() === "") return;
    const newBot = {
      name: botName,
      context: botContext,
    };
    setChatBot((prev) => [...prev, newBot]);
    await createChatbot({
      name: botName,
      context: botContext,
      token: getToken(),
    });
    setBotName("");
    setBotContext("");
  }
  console.log(chatbots);
  if (!isloggin) {
    return <>Please login</>;
  }

  function handleVisit(chatBotName) {
    router.push(`/chatbot/${chatBotName}`);
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
        <h1>Your ChatsBot</h1>
        {chatbots.map((item, idx) => {
          return (
            <div className="chatBoat_list" key={idx}>
              <h2>{item.name}</h2>
              <h2>{item.context}</h2>
              <button onClick={() => handleVisit(item.name)}>Visit</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;
