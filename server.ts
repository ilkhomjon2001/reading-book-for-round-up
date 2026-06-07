import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// Initialize Express
const app = express();
app.use(express.json());

const PORT = 3000;

// Lazy initialization of GoogleGenAI
let ai: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!ai) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
      throw new Error("GEMINI_API_KEY is not configured in the environment.");
    }
    ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return ai;
}

// API standard health-check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// AI Lesson Generator Endpoint
app.post("/api/generate-lesson", async (req, res) => {
  try {
    const { grammarTopic, interest } = req.body;
    if (!grammarTopic || !interest) {
      return res.status(400).json({ error: "grammarTopic and interest are required fields." });
    }

    const client = getGeminiClient();

    const prompt = `You are an expert ESL (English as a Second Language) teacher who designs reading books resembling 'Round-Up' for kids aged 8-11.
Create a fully-formed interactive lesson suitable for children.
The lesson MUST be focused on the grammar topic: "${grammarTopic}" and themed around the child's interest: "${interest}".

You must provide a JSON response that matches this structure:
{
  "title": "A fun title for the lesson, e.g. 'Lesson: Minecraft Plural Quest'",
  "topic": "${grammarTopic}",
  "grammarOverview": "A brief explanation of how the grammar works in simple Uzbek (for Uzbek kids) and simple English, with a few neat bullet points.",
  "story": {
    "title": "A catchy, fun story title",
    "content": "A story written for 8-11 year old EN beginners (A1-A2 level) about 100-150 words. It must incorporate plenty of examples of ${grammarTopic} quite clearly. Make it super positive and fun!"
  },
  "vocabulary": [
    {
      "word": "word1",
      "partOfSpeech": "noun/verb/adjective/adverb",
      "translation": "Uzbek translation",
      "definition": "Simple English explanation suitable for a child",
      "example": "An example sentence using this word from or inspired by the story"
    }
    // Exactly 5 vocabulary items!
  ],
  "readingComprehension": [
    {
      "id": 1,
      "question": "A multiple choice question about the story",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": "Option A (the exact text of the correct choice)",
      "explanation": "A simple sentence in Uzbek explaining why this is the correct answer"
    }
    // Exactly 3 questions!
  ],
  "grammarExercises": [
    {
      "id": 1,
      "type": "choice",
      "question": "A fill-in-the-gaps question testing ${grammarTopic}, e.g., 'We ___ (have got) a fast car.'",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": "Option A (the correct choice)",
      "hint": "A helpful clue in Uzbek about the correct grammar choice"
    }
    // Exactly 3 exercises!
  ]
}

Ensure the level is perfectly customized for children. Keep it simple and interactive.
Return ONLY valid JSON. Absolutely do not include any markdown format like \`\`\`json or \`\`\`. Start directly with the raw curly brace { and end with }.`;

    const response = await client.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: ["title", "topic", "grammarOverview", "story", "vocabulary", "readingComprehension", "grammarExercises"],
          properties: {
            title: { type: Type.STRING },
            topic: { type: Type.STRING },
            grammarOverview: { type: Type.STRING },
            story: {
              type: Type.OBJECT,
              required: ["title", "content"],
              properties: {
                title: { type: Type.STRING },
                content: { type: Type.STRING }
              }
            },
            vocabulary: {
              type: Type.ARRAY,
              description: "Exactly 5 terms",
              items: {
                type: Type.OBJECT,
                required: ["word", "partOfSpeech", "translation", "definition", "example"],
                properties: {
                  word: { type: Type.STRING },
                  partOfSpeech: { type: Type.STRING },
                  translation: { type: Type.STRING },
                  definition: { type: Type.STRING },
                  example: { type: Type.STRING }
                }
              }
            },
            readingComprehension: {
              type: Type.ARRAY,
              description: "Exactly 3 questions",
              items: {
                type: Type.OBJECT,
                required: ["id", "question", "options", "correctAnswer", "explanation"],
                properties: {
                  id: { type: Type.INTEGER },
                  question: { type: Type.STRING },
                  options: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING }
                  },
                  correctAnswer: { type: Type.STRING },
                  explanation: { type: Type.STRING }
                }
              }
            },
            grammarExercises: {
              type: Type.ARRAY,
              description: "Exactly 3 exercises",
              items: {
                type: Type.OBJECT,
                required: ["id", "type", "question", "options", "correctAnswer", "hint"],
                properties: {
                  id: { type: Type.INTEGER },
                  type: { type: Type.STRING },
                  question: { type: Type.STRING },
                  options: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING }
                  },
                  correctAnswer: { type: Type.STRING },
                  hint: { type: Type.STRING }
                }
              }
            }
          }
        }
      }
    });

    const parsedData = JSON.parse(response.text || "{}");
    res.json(parsedData);

  } catch (err: any) {
    console.error("Error invoking Gemini:", err);
    res.status(500).json({ error: err.message || "Something went wrong while generating the lesson." });
  }
});

// Vite middleware setup or Static assets loading
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

setupServer();
