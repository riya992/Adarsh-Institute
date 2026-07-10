import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

// Create Express app
const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-loaded Gemini AI client
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is required. Please set it in Settings > Secrets.");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Chat API Endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message) {
      res.status(400).json({ error: "Message is required" });
      return;
    }

    let ai;
    try {
      ai = getGeminiClient();
    } catch (err: any) {
      console.warn("Gemini client initialization failed:", err.message);
      res.json({
        text: "Hello! I am Adarsh AI, your helper bot. I would love to guide you about Adarsh Institute, but my Gemini API Key is currently unconfigured. Please configure your API key in **Settings > Secrets** in the AI Studio sidebar! In the meantime, I can tell you that we offer BCA, MCA, DCA, Tally, and ADCA courses with excellent eligibility options. Ask me anything and I will do my best to answer with pre-programmed info!",
      });
      return;
    }

    // System instruction detailing Adarsh Institute's info
    const systemInstruction = `You are "Adarsh AI", the official virtual assistant for Adarsh Institute.
Our tagline is "Become a Part of Computer Legacy".
You are polite, professional, and knowledgeable about the courses, eligibility, fee structure, and admissions at Adarsh Institute.

Our details:
- Enquiry / Helpline Number: +91 92126 21301 (Available 9 AM to 7 PM)
- Email: info@adarshinstitute.edu
- Website: www.adarshinstitute.in
- Address: First Floor, near Safiabad Road, mode, Narela, Delhi, 110040
- Instagram Profile: instagram.com/adarsh_institute (clickable links where applicable)
- WhatsApp Group: Chat with our admissions counselor or join our students' legacy circle.

Courses & Eligibility:
1. Regular Courses:
   - Diploma in Computer Applications (DCA): Duration: 6 months, Fees: ₹12,000, Eligibility: 10th Pass.
   - Advanced Diploma in Computer Applications (ADCA): Duration: 12 months, Fees: ₹22,000, Eligibility: 12th Pass.
   - Tally Prime: Duration: 3 months, Fees: ₹6,500, Eligibility: 10th Pass.
   - CCC (Course on Computer Concepts): Duration: 2 months, Fees: ₹3,500, Eligibility: No strict criteria (Open).
2. Distance Learning:
   - DCA, BCA, MCA, PGCDA, and Tally distance options available.
   - Eligibility: 10th, 12th, or Graduation depending on the program.
3. Undergraduate (UG):
   - BCA (Bachelor of Computer Applications): Duration: 3 Years, Eligibility: 12th Pass (Any stream, 50%+).
   - B.Sc. (Computer Science): Duration: 3 Years, Eligibility: 12th Pass with Science/Maths.
   - B.Com (Computerized Accounting), BA (Information Tech).
4. Postgraduate (PG):
   - MCA (Master of Computer Applications): Duration: 2 Years, Eligibility: BCA or Graduation with Mathematics.
   - M.Sc. (Computer Science): Duration: 2 Years, Eligibility: B.Sc. CS or BCA.
   - MBA (IT Systems), M.Com.

Frequently Asked Questions (FAQ) Context:
- Admission Process: Fill out the 'Enroll Now' registration form on our website, pay a minimal registration fee, and upload documents.
- Scholarship: Up to 50% scholarship based on 12th merit (85%+ score) or internal scholarship test.
- Placement: 100% placement assistance with top IT companies. We have a dedicated placement cell.
- Classes: Hybrid mode is available (flexible online & on-campus legacy labs).

Keep answers professional, elegant, and concise. Format lists with clean bullet points. When students ask about registration, strongly encourage them to click the "Enroll Now" button at the top or bottom of the website.`;

    // Map history to Google GenAI schema format
    const formattedContents: any[] = [];
    if (history && Array.isArray(history)) {
      history.forEach((turn: any) => {
        formattedContents.push({
          role: turn.role === "user" ? "user" : "model",
          parts: [{ text: turn.parts?.[0]?.text || turn.text || "" }],
        });
      });
    }

    // Append the current message
    formattedContents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedContents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    res.json({
      text: response.text || "I apologize, I received an empty response. How else can I assist you with Adarsh Institute's legacy?",
    });
  } catch (error: any) {
    console.error("Error in /api/chat:", error);
    res.status(500).json({ error: "Failed to communicate with AI Assistant", details: error.message });
  }
});

// Serve frontend assets
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    // Integrate Vite development server
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}

startServer();
