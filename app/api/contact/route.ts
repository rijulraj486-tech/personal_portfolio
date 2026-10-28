import { validateContactForm } from "@/lib/contact-validation";
import type { ContactSubmissionResponse } from "@/types/contact";

const maxRequestBytes = 12_000;

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return json({ success: false, message: "Unsupported request format." }, 415);
  }

  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > maxRequestBytes) {
    return json({ success: false, message: "Submitted content is too large." }, 413);
  }

  let body: unknown;
  try {
    const payload = await request.text();
    if (new TextEncoder().encode(payload).byteLength > maxRequestBytes) {
      return json({ success: false, message: "Submitted content is too large." }, 413);
    }
    body = JSON.parse(payload);
  } catch {
    return json({ success: false, message: "Please check the submitted fields." }, 400);
  }

  const { errors } = validateContactForm(body);
  if (Object.keys(errors).length > 0) {
    return json(
      { success: false, message: "Please check the submitted fields.", errors },
      422,
    );
  }

  // Delivery is intentionally not configured yet. This confirms validation and receipt by the API.
  return json({ success: true, message: "Your message has been received by the API." }, 200);
}

function json(response: ContactSubmissionResponse, status: number) {
  return Response.json(response, { status });
}
