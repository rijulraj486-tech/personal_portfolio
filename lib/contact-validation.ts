import type { ContactFieldErrors, ContactFormValues } from "@/types/contact";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const emptyContactForm: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function validateContactForm(input: unknown): {
  values?: ContactFormValues;
  errors: ContactFieldErrors;
} {
  if (!isRecord(input)) {
    return { errors: { message: "Please check the submitted fields." } };
  }

  const values: ContactFormValues = {
    name: stringValue(input.name),
    email: stringValue(input.email),
    subject: stringValue(input.subject),
    message: stringValue(input.message),
  };
  const errors: ContactFieldErrors = {};

  if (values.name.length < 2) {
    errors.name = "Please enter your name.";
  } else if (values.name.length > 80) {
    errors.name = "Name must be 80 characters or fewer.";
  }

  if (!emailPattern.test(values.email) || values.email.length > 254) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.subject.length < 3) {
    errors.subject = "Subject must be at least 3 characters.";
  } else if (values.subject.length > 160) {
    errors.subject = "Subject must be 160 characters or fewer.";
  }

  if (values.message.length < 10) {
    errors.message = "Message must be at least 10 characters.";
  } else if (values.message.length > 5_000) {
    errors.message = "Message must be 5,000 characters or fewer.";
  }

  return { values, errors };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function stringValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}
