"use server";

import OpenAI from "openai";
import { auth } from "@clerk/nextjs/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateChatResponse = async (chatMessage: any) => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  if (!Array.isArray(chatMessage)) {
    throw new Error("Invalid input format");
  }

  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful AI assistant." },
        ...chatMessage,
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
      max_tokens: 500,
    });
    return response.choices[0].message;
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return null;
  }
};
