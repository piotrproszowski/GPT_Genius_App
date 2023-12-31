"use client";

import { generateChatResponse } from "@/utils/action";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

const Chat = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const { mutate } = useMutation({
    mutationFn: (query) => generateChatResponse([...messages, query]),
    onSuccess: (data) => {
      if (!data) {
        toast.error("Something went wrong");
      }
      setMessages((prev) => [...prev, data]);
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const query = { role: "user", text };
    mutate(query);
    setMessages((prev) => [...prev, query]);
    setText("");
  };
  return (
    <div className='min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]'>
      <div>
        <h2 className='text-5xl'>messages</h2>
      </div>
      <form onSubmit={handleSubmit} className='max-w-4xl pt-12'>
        <div className='join w-full'>
          <input
            type='text'
            placeholder='Message GeniusGPT'
            className='input input-bordered join-item w-full'
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
          />
          <button type='submit' className='btn btn-primary join-item'>
            Ask question
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
