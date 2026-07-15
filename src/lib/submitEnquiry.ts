export interface EnquiryPayload {
  name: string;
  email: string;
  phone: string;
  state: string;
  course: string;
  source: "enrollment_form" | "modal_form";
}

function getSubmitEndpoint() {
  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    return "/api/submit-enquiry";
  }

  return "/.netlify/functions/submit-enquiry";
}

export async function submitEnquiry(payload: EnquiryPayload): Promise<void> {
  const response = await fetch(getSubmitEndpoint(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(result.error || "Submission failed. Please try again.");
  }
}
