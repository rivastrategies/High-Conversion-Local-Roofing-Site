
import { GoogleGenAI, Type } from "@google/genai";
import { AIAnalysisResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeRoofIssue = async (description: string): Promise<AIAnalysisResult> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Based on this description of a roofing problem, provide a professional preliminary assessment: "${description}"`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          suggestion: {
            type: Type.STRING,
            description: "A professional analysis of the likely issue.",
          },
          urgency: {
            type: Type.STRING,
            enum: ["Low", "Medium", "High"],
            description: "How critical the repair is.",
          },
          recommendedService: {
            type: Type.STRING,
            description: "The name of the service they should request (e.g. Roof Repair, Storm Damage Inspection).",
          },
        },
        required: ["suggestion", "urgency", "recommendedService"],
      },
      systemInstruction: "You are an expert roofing consultant. Provide helpful, safety-first advice for homeowners based on their descriptions. Be concise and professional."
    },
  });

  return JSON.parse(response.text || '{}');
};
