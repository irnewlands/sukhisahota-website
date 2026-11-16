import { copy } from "@/lib/locale";
import { subscribeToNewsletter } from "@/lib/newsletter";
import { Mail } from "lucide-react";
import { useId, useRef, useState } from "react";

export default function NewsletterSignup() {
  const formId = useId();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const inFlight = useRef(false);

  return (
    <div className="rounded-xl border border-white/30 bg-orange p-6 md:p-8 text-center">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Mail className="w-7 h-7 text-white" aria-hidden="true" />
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-white">
          {copy("Stay Updated")}
        </h3>
      </div>

      <p className="text-white mb-6 max-w-2xl mx-auto">
        {copy(
          "Get future campaign updates, event announcements, and grassroots organizing opportunities delivered to your inbox."
        )}
      </p>

      <div role="status" aria-live="polite" aria-atomic="true">
        {submitting && <p className="mb-4 text-white">{copy("Sending...")}</p>}
        {submitted && (
          <p className="mb-4 rounded-xl border border-white/30 p-4 text-white font-semibold">
            {copy("Thank you! Your signup has been accepted.")}
          </p>
        )}
      </div>
      <div role="alert" aria-atomic="true">
        {error && (
          <p className="mb-4 rounded-xl border border-white/30 p-4 text-white font-semibold">
            {error}
          </p>
        )}
      </div>

      <form
        onSubmit={async e => {
          e.preventDefault();
          if (inFlight.current) return;
          const form = e.currentTarget;
          const fields = new FormData(form);
          inFlight.current = true;
          setSubmitted(false);
          setError("");
          setSubmitting(true);
          const result = await subscribeToNewsletter({
            firstName: String(fields.get("fields[name]") || ""),
            lastName: String(fields.get("fields[last_name]") || ""),
            email: String(fields.get("fields[email]") || ""),
          });
          if (result === "accepted") {
            form.reset();
            setSubmitted(true);
          } else {
            setError(
              copy(
                result === "invalid_fields"
                  ? "Please check your first name, last name and email address, then try again. Your details have been kept."
                  : result === "provider_rejected"
                    ? "Your signup could not be accepted. Please check your details and try again, or email info@sukhisahota.ca. Your details have been kept."
                    : "We could not confirm your signup. Your details have been kept. Please try again, or email info@sukhisahota.ca for help."
              )
            );
          }
          inFlight.current = false;
          setSubmitting(false);
        }}
        className="space-y-4 max-w-2xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div className="text-left">
            <label
              htmlFor={`${formId}-first-name`}
              className="mb-2 block font-semibold text-white"
            >
              {copy("First name")} {copy("(required)")}
            </label>
            <input
              id={`${formId}-first-name`}
              type="text"
              name="fields[name]"
              placeholder={copy("First name")}
              required
              readOnly={submitting}
              maxLength={100}
              autoComplete="given-name"
              className="w-full rounded-md px-4 py-3 bg-white text-black placeholder-gray-500 border-2 border-white"
            />
          </div>
          <div className="text-left">
            <label
              htmlFor={`${formId}-last-name`}
              className="mb-2 block font-semibold text-white"
            >
              {copy("Last name")} {copy("(required)")}
            </label>
            <input
              id={`${formId}-last-name`}
              type="text"
              name="fields[last_name]"
              placeholder={copy("Last name")}
              required
              readOnly={submitting}
              maxLength={100}
              autoComplete="family-name"
              className="w-full rounded-md px-4 py-3 bg-white text-black placeholder-gray-500 border-2 border-white"
            />
          </div>
        </div>

        <div className="text-left">
          <label
            htmlFor={`${formId}-email`}
            className="mb-2 block font-semibold text-white"
          >
            {copy("Email")} {copy("(required)")}
          </label>
          <input
            id={`${formId}-email`}
            type="email"
            name="fields[email]"
            placeholder={copy("your@email.com")}
            required
            readOnly={submitting}
            maxLength={254}
            autoComplete="email"
            className="w-full rounded-md px-4 py-3 bg-white text-black placeholder-gray-500 border-2 border-white"
          />
        </div>

        <button
          type="submit"
          aria-disabled={submitting}
          className="w-full rounded-md bg-black px-6 py-3 font-bold text-white hover:bg-charcoal transition aria-disabled:opacity-60"
        >
          {submitting ? copy("Sending...") : copy("Stay Connected")}
        </button>

        <p className="text-sm text-white">
          {copy(
            "We respect your privacy. Unsubscribe at any time by e-mailing:"
          )}{" "}
          info@sukhisahota.ca
        </p>
      </form>
    </div>
  );
}
