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
  const { error } = await supabase
    .from("enquiries")
    .insert([
      {
        student_name: payload.name,
        email: payload.email,
        phone_number: payload.phone,
        state: payload.state,
        target_course: payload.course,
      },
    ]);

  if (error) {
    throw error;
  }
}
