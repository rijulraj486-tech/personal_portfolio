"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { emptyContactForm, validateContactForm } from "@/lib/contact-validation";
import { submitContactForm } from "@/services/contact";
import type { ContactField, ContactFieldErrors, ContactFormValues } from "@/types/contact";

type SubmissionState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(emptyContactForm);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [state, setState] = useState<SubmissionState>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const statusRef = useRef<HTMLParagraphElement>(null);

  function updateValue(field: ContactField, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (state !== "idle" || statusMessage) {
      setState("idle");
      setStatusMessage("");
    }
  }

  function validateField(field: ContactField) {
    const { errors: nextErrors } = validateContactForm(values);
    setErrors((current) => ({ ...current, [field]: nextErrors[field] }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "submitting") return;

    const { errors: nextErrors, values: cleanedValues } = validateContactForm(values);

    if (Object.keys(nextErrors).length > 0 || !cleanedValues) {
      setErrors(nextErrors);
      setState("error");
      setStatusMessage("Please correct the highlighted fields and try again.");
      return;
    }

    setErrors({});
    setState("submitting");
    setStatusMessage("");
    const response = await submitContactForm(cleanedValues);

    if (response.success) {
      setValues(emptyContactForm);
      setState("success");
      setStatusMessage(response.message);
      requestAnimationFrame(() => statusRef.current?.focus());
      return;
    }

    setErrors(response.errors ?? {});
    setState("error");
    setStatusMessage(response.message);
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit} aria-busy={state === "submitting"}>
      <div className="contact-form-fields">
        <Field label="Name" field="name" value={values.name} error={errors.name} onChange={updateValue} onBlur={validateField} autoComplete="name" />
        <Field label="Email" field="email" value={values.email} error={errors.email} onChange={updateValue} onBlur={validateField} autoComplete="email" type="email" />
        <Field label="Subject" field="subject" value={values.subject} error={errors.subject} onChange={updateValue} onBlur={validateField} />
        <Field label="Message" field="message" value={values.message} error={errors.message} onChange={updateValue} onBlur={validateField} description="Please include at least a few details so I can respond helpfully." textarea />
      </div>
      <p ref={statusRef} className={`contact-status ${state}`} role={state === "error" ? "alert" : "status"} tabIndex={-1} aria-live="polite">
        {statusMessage}
      </p>
      <button className="button button-primary" type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? "Sending message…" : "Send message"}
      </button>
    </form>
  );
}

type FieldProps = {
  label: string;
  field: ContactField;
  value: string;
  error?: string;
  type?: "email" | "text";
  textarea?: boolean;
  autoComplete?: string;
  description?: string;
  onChange: (field: ContactField, value: string) => void;
  onBlur: (field: ContactField) => void;
};

function Field({ label, field, value, error, type = "text", textarea, autoComplete, description, onChange, onBlur }: FieldProps) {
  const id = `contact-${field}`;
  const errorId = `${id}-error`;
  const descriptionId = `${id}-description`;
  const describedBy = [description ? descriptionId : undefined, error ? errorId : undefined]
    .filter(Boolean)
    .join(" ") || undefined;
  const commonProps = {
    id,
    name: field,
    value,
    required: true,
    "aria-invalid": Boolean(error),
    "aria-describedby": describedBy,
    "aria-errormessage": error ? errorId : undefined,
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(field, event.target.value),
    onBlur: () => onBlur(field),
  };

  return <div className="contact-field"><label htmlFor={id}>{label}</label>{description ? <p className="contact-field-description" id={descriptionId}>{description}</p> : null}{textarea ? <textarea {...commonProps} rows={7} maxLength={5000} /> : <input {...commonProps} type={type} autoComplete={autoComplete} maxLength={field === "name" ? 80 : field === "email" ? 254 : 160} />}{error ? <p className="contact-field-error" id={errorId}>{error}</p> : null}</div>;
}
