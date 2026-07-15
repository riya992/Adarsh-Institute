import { supabase } from "./supabase";

export interface EnquiryPayload {
  name: string;
  email: string;
  phone: string;
  state: string;
  course: string;
  source: "enrollment_form" | "modal_form";
}

export async function submitEnquiry(payload: EnquiryPayload): Promise<void> {
  // Check env vars first
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error(
      `Supabase not configured — URL: "${url}", Key: "${key ? "present" : "missing"}". Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.local and restart the server.`
    );
  }

  console.log("🔵 Submitting to Supabase:", url);
  console.log("🔵 Payload:", payload);

  const { data, error } = await supabase
    .from("enquiries")
    .insert([
      {
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        state: payload.state,
        course: payload.course,
        source: payload.source,
      },
    ])
    .select();

  console.log("🔵 Response — data:", data, "| error:", error);

  if (error) {
    console.error("❌ Supabase error:", JSON.stringify(error, null, 2));
    // Show full error details in UI
    const detail = error.details ? ` (${error.details})` : "";
    const hint = error.hint ? ` Hint: ${error.hint}` : "";
    throw new Error(`DB Error [${error.code}]: ${error.message}${detail}${hint}`);
  }
}

