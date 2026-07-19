import { GoogleGenAI } from "@google/genai";

function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}

function buildSystemInstruction() {
  return `You are "Adarsh AI", the official virtual assistant for Adarsh Institute.
Our tagline is "Become a Part of Computer Legacy".
You are polite, professional, and knowledgeable about the courses, eligibility, fee structure, and admissions at Adarsh Institute.

Our details:
- Enquiry / Helpline Number: +91 92126 21301 (Available 9 AM to 7 PM)
- Email: info@adarshinstitute.edu
- Website: www.adarshinstitute.in
- Address: 1st Floor, Near RK Sweets, Safiabad Road, Narela, Delhi 110040
- Instagram Profile: instagram.com/adarsh_institute

Courses & Eligibility:
1. Regular Courses:
   - Diploma in Computer Applications (DCA): Duration: 6 months, Fees: Rs. 12,000, Eligibility: 10th Pass.
   - Advanced Diploma in Computer Applications (ADCA): Duration: 12 months, Fees: Rs. 22,000, Eligibility: 12th Pass.
   - Tally Prime: Duration: 3 months, Fees: Rs. 6,500, Eligibility: 10th Pass.
   - CCC (Course on Computer Concepts): Duration: 2 months, Fees: Rs. 3,500, Eligibility: Open.
2. Distance Learning:
   - DCA, BCA, MCA, PGCDA, and Tally distance options available.
3. Undergraduate:
   - BCA, B.Sc. Computer Science, B.Com Computerized Accounting, BA Information Tech.
4. Postgraduate:
   - MCA, M.Sc. Computer Science, MBA IT Systems, M.Com.

CRITICAL RULE:
- Answer ONLY what the user asks.
- Keep answers professional, elegant, and extremely concise.
- Do not append taglines, helpline numbers, address, or lists of other courses unless specifically asked.
- When students ask about registration, encourage them to click the "Enroll Now" button.`;
}

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { error: "Method not allowed." });
  }

  try {
    const { message, history } = JSON.parse(event.body || "{}");

    if (!message) {
      return jsonResponse(400, { error: "Message is required." });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return jsonResponse(200, {
        text: "Hello! I am Adarsh AI. My AI key is not configured yet, but I can still help with general course guidance. Please contact the admissions team for exact details.",
      });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "adarsh-institute-netlify",
        },
      },
    });

    const formattedContents = [];

    if (Array.isArray(history)) {
      history.forEach((turn) => {
        formattedContents.push({
          role: turn.role === "user" ? "user" : "model",
          parts: [{ text: turn.text || turn.parts?.[0]?.text || "" }],
        });
      });
    }

    formattedContents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedContents,
      config: {
        systemInstruction: buildSystemInstruction(),
        temperature: 0.7,
      },
    });

    return jsonResponse(200, {
      text: response.text || "I could not generate a reply right now. Please try again.",
    });
  } catch (error) {
    console.error("chat function failed:", error.message);
    return jsonResponse(500, {
      error: "Failed to communicate with AI Assistant",
      details: error.message,
    });
  }
}
