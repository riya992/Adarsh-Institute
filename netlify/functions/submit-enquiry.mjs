import { jsonResponse, saveEnquiry, validateEnquiryPayload } from "./_supabase.mjs";

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { error: "Method not allowed." });
  }

  try {
    const payload = validateEnquiryPayload(JSON.parse(event.body || "{}"));
    await saveEnquiry(payload);
    return jsonResponse(200, { ok: true });
  } catch (error) {
    console.error("submit-enquiry failed:", error.message);
    return jsonResponse(400, { error: error.message || "Unable to submit enquiry." });
  }
}
