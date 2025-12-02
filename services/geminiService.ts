import { GoogleGenAI } from "@google/genai";
import { TEAM_MEMBERS, GROUP_CAPABILITIES, GROUP_VISION } from "../constants";

// Initialize Gemini Client
// IMPORTANT: In a real production app, this should be proxied through a backend.
// For this demo, we assume the key is in the env.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateTeamPitch = async (projectName: string): Promise<string> => {
  if (!process.env.API_KEY) {
    console.warn("API Key is missing.");
    return "אנא הגדר מפתח API כדי לקבל פיץ' מותאם אישית מ-Gemini.";
  }

  const teamContext = TEAM_MEMBERS.map(m => `${m.name}: ${m.role} (${m.description})`).join('\n');
  const capabilitiesContext = GROUP_CAPABILITIES.join(', ');
  
  const prompt = `
    You are an expert business consultant helping a student group named "Group 32" pitch themselves to a project supervisor.
    
    The Group Vision:
    "${GROUP_VISION}"

    Group Capabilities:
    ${capabilitiesContext}

    Team Members:
    ${teamContext}
    
    The Project they want: "${projectName}".
    
    Task: Write a persuasive, high-energy, and professional pitch in Hebrew (approx 40-60 words).
    Explain specifically why this specific combination of team skills (Management, Finance, Marketing, Data, Innovation) and their shared values (High commitment, Heart, Systems thinking) is perfect for "${projectName}".
    Make it sound confident, professional, and enthusiastic.
    output strictly plain text.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text || "לא התקבל מענה.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "אירעה שגיאה ביצירת הפיץ'. אנא נסה שנית.";
  }
};