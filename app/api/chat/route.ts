import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const SYSTEM_PROMPT = `You are a helpful AI assistant for a modern AI chatbot platform. 

About the platform:
- We provide human-friendly AI chatbot solutions
- Our AI instantly resolves customer questions
- The AI reads documentation and speaks with empathy
- We offer easy integration and customization
- Perfect for customer support, FAQ automation, and user engagement

Keep your responses:
- Concise and helpful (2-3 sentences max)
- Friendly and conversational
- Focused on how our AI chatbot can help businesses
- Professional yet warm

If asked about features, mention: instant responses, empathetic AI, documentation integration, easy setup, 24/7 availability.`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: SYSTEM_PROMPT }],
        },
        {
          role: "model",
          parts: [{ text: "Understood! I'll be a helpful assistant for your AI chatbot platform, keeping responses concise and friendly." }],
        },
      ],
    });

    const result = await chat.sendMessage(message);
    const response = result.response.text();

    return NextResponse.json({ response });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json(
      { response: "Sorry, I'm having trouble right now. Please try again!" },
      { status: 500 }
    );
  }
}