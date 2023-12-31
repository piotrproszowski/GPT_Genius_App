"use server";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateChatResponse = async (chatMessage: any) => {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "Hello, how are you?" },
        ...chatMessage,
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
    });
    return response.choices[0].message;
  } catch (error) {
    return null;
  }
};
