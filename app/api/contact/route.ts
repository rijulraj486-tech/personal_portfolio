import { Resend } from "resend";
import { validateContactForm } from "@/lib/contact-validation";
import type { ContactSubmissionResponse } from "@/types/contact";

const maxRequestBytes = 12_000;
const deliveryErrorMessage = "Something went wrong while sending your message. Please try again.";

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

  const { errors, values } = validateContactForm(body);
  if (Object.keys(errors).length > 0 || !values) {
    return json(
      { success: false, message: "Please check the submitted fields.", errors },
      422,
    );
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_EMAIL?.trim();
  const from = process.env.RESEND_FROM_EMAIL?.trim();

  if (!apiKey || !to || !from) {
    console.error("Contact email delivery is not configured.");
    return json({ success: false, message: deliveryErrorMessage }, 500);
  }

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: values.email,
      subject: `Portfolio contact: ${values.subject}`,
      text: [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        `Subject: ${values.subject}`,
        "",
        values.message,
      ].join("\n"),
    });

    if (error || !data) {
      console.error("Resend rejected a contact email.", {
        name: error?.name,
        statusCode: error?.statusCode,
      });
      return json({ success: false, message: deliveryErrorMessage }, 502);
    }
  } catch (error) {
    console.error(
      "Resend contact email delivery failed unexpectedly.",
      error instanceof Error ? error.name : "Unknown error",
    );
    return json({ success: false, message: deliveryErrorMessage }, 502);
  }

  return json({ success: true, message: "Your message has been sent successfully." }, 200);
}

function json(response: ContactSubmissionResponse, status: number) {
  return Response.json(response, { status });
}
