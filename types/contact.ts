export type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactField = keyof ContactFormValues;

export type ContactFieldErrors = Partial<Record<ContactField, string>>;

export type ContactSubmissionResponse = {
  success: boolean;
  message: string;
  errors?: ContactFieldErrors;
};
