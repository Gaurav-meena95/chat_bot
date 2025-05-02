"use client";
import { getToken } from "@/helpers/auth";
import { askGemini } from "@/services/ai";
import { getChatbotByName } from "@/services/chatbot";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function Page() {
  const params = useParams();

  const [botMessage, setbotMessage] = useState("");
  const [type_text, setType_text] = useState("");
  const [botDetails, setfbotDetails] = useState({
    name: "",
    context: "",
  });
  useEffect(() => {
    if (!params.name) return;
    const token = getToken();
    getChatbotByName({ token, name: params.name }).then((data) => {
      setfbotDetails({ ...data });
    });
  }, [params.name]);
  function handelChange(e) {
    setType_text(e.target.value);
  }
  function handelSend(e) {
    e.preventDefault();
    askGemini({text:type_text,context:botDetails.context}).then((response)=>response.json())
    .then((data)=>{
      const botMessage = data.response.candidates[0].content.parts[0].text
      setbotMessage(botMessage)
    })
  }
  return (
    <div>
      <h1>{params.name}</h1>
      <h2>Context :{botDetails.context}</h2>
      <form>
        <input
          onChange={handelChange}
          type="text"
          placeholder="Enter Your Quarry"
        />
        <button onClick={handelSend}>Send</button>
      </form>
      <h1>BOT ANSWER :- {botMessage}</h1>
    </div>
  );
}

export default Page;
