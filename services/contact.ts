import type { ContactFormValues, ContactSubmissionResponse } from "@/types/contact";

const fallbackError: ContactSubmissionResponse = {
  success: false,
  message: "Something went wrong while sending your message. Please try again.",
};

export async function submitContactForm(
  values: ContactFormValues,
): Promise<ContactSubmissionResponse> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data: unknown = await response.json().catch(() => null);

    if (isContactSubmissionResponse(data) && (!data.success || response.ok)) {
      return data;
    }

    return fallbackError;
  } catch {
    return fallbackError;
  }
}

function isContactSubmissionResponse(value: unknown): value is ContactSubmissionResponse {
  return (
    typeof value === "object" &&
    value !== null &&
    "success" in value &&
    "message" in value &&
    typeof value.success === "boolean" &&
    typeof value.message === "string"
  );
}
