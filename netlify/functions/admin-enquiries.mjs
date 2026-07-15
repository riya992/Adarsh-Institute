import { fetchEnquiries, jsonResponse } from "./_supabase.mjs";

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { error: "Method not allowed." });
  }

  try {
    const { password } = JSON.parse(event.body || "{}");
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      return jsonResponse(500, { error: "ADMIN_PASSWORD is not configured on the server." });
    }

    if (!password || password !== adminPassword) {
      return jsonResponse(401, { error: "Invalid admin password." });
    }

    const enquiries = await fetchEnquiries();
    return jsonResponse(200, { enquiries });
  } catch (error) {
    console.error("admin-enquiries failed:", error.message);
    return jsonResponse(500, { error: error.message || "Failed to load admin enquiries." });
  }
}
