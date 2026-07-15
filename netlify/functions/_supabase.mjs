export function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}

export function normalizeSupabaseUrl(url) {
  if (!url) {
    return "";
  }

  try {
    const parsedUrl = new URL(url.trim());
    parsedUrl.pathname = "";
    parsedUrl.search = "";
    parsedUrl.hash = "";
    return parsedUrl.toString().replace(/\/$/, "");
  } catch {
    return url.trim().replace(/\/rest\/v1\/?$/i, "").replace(/\/$/, "");
  }
}

export function validateEnquiryPayload(payload) {
  const cleanPayload = {
    name: String(payload?.name ?? "").trim(),
    email: String(payload?.email ?? "").trim(),
    phone: String(payload?.phone ?? "").trim(),
    state: String(payload?.state ?? "").trim(),
    course: String(payload?.course ?? "").trim(),
    source: payload?.source,
  };

  if (!cleanPayload.name) throw new Error("Student name is required.");
  if (!cleanPayload.email || !cleanPayload.email.includes("@")) throw new Error("Valid email is required.");
  if (!cleanPayload.phone || cleanPayload.phone.length < 8) throw new Error("Valid phone number is required.");
  if (!cleanPayload.state) throw new Error("State is required.");
  if (!cleanPayload.course) throw new Error("Course is required.");
  if (cleanPayload.source !== "enrollment_form" && cleanPayload.source !== "modal_form") {
    throw new Error("Invalid enquiry source.");
  }

  return cleanPayload;
}

export function getSupabaseAdminConfig() {
  const supabaseUrl = normalizeSupabaseUrl(process.env.SUPABASE_URL);
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Supabase server access is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.");
  }

  return { supabaseUrl, serviceRoleKey };
}

export async function saveEnquiry(payload) {
  const { supabaseUrl, serviceRoleKey } = getSupabaseAdminConfig();
  const response = await fetch(`${supabaseUrl}/rest/v1/enquiries`, {
    method: "POST",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.message || "Unable to save enquiry.");
  }
}

export async function fetchEnquiries() {
  const { supabaseUrl, serviceRoleKey } = getSupabaseAdminConfig();
  const response = await fetch(
    `${supabaseUrl}/rest/v1/enquiries?select=*&order=created_at.desc&limit=1000`,
    {
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
      },
    }
  );

  const responseBody = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(responseBody.message || "Unable to fetch enquiries from Supabase.");
  }

  return responseBody;
}
