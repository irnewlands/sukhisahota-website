export type SignupResult =
  | "accepted"
  | "invalid_fields"
  | "provider_rejected"
  | "unavailable";

export async function subscribeToNewsletter(fields: {
  firstName: string;
  lastName: string;
  email: string;
}): Promise<SignupResult> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    // The existing public form endpoint supports CORS. An HTTP 200 alone does
    // not mean acceptance: MailerLite also returns validation errors as JSON.
    const response = await fetch(
      "https://assets.mailerlite.com/jsonp/2430134/forms/190139921541891187/subscribe",
      {
        method: "POST",
        headers: { Accept: "application/json" },
        credentials: "omit",
        body: new URLSearchParams({
          "fields[name]": fields.firstName.trim(),
          "fields[last_name]": fields.lastName.trim(),
          "fields[email]": fields.email.trim(),
          "ml-submit": "1",
          anticsrf: "true",
        }),
        signal: controller.signal,
      }
    );
    const result = await response.json();
    if (response.ok && result?.success === true) return "accepted";
    if (result?.success === false && result.errors?.fields)
      return "invalid_fields";
    if (result?.success === false) return "provider_rejected";
    return "unavailable";
  } catch {
    return "unavailable";
  } finally {
    clearTimeout(timeout);
  }
}
