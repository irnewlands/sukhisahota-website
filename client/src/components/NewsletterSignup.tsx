import { copy } from "@/lib/locale";
import { Mail } from "lucide-react";
import { useId, useState } from "react";

export default function NewsletterSignup() {
  const formId = useId();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  return (
    <div className="rounded-xl border border-white/30 bg-orange p-6 md:p-8 text-center">
      <iframe name="mailerlite-hidden-frame" style={{ display: "none" }} />

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
        {submitted && (
          <p className="mb-4 rounded-xl border border-white/30 p-4 text-white font-semibold">
            {copy(
              "Please check your inbox for a subscription confirmation. If nothing arrives, try again or email info@sukhisahota.ca."
            )}
          </p>
        )}
      </div>

      <form
        action="https://assets.mailerlite.com/jsonp/2430134/forms/190139921541891187/subscribe"
        method="post"
        target="mailerlite-hidden-frame"
        onSubmit={e => {
          setSubmitting(true);

          const form = e.currentTarget;

          setTimeout(() => {
            form.reset();
            setSubmitted(true);
            setSubmitting(false);
          }, 800);
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
            autoComplete="email"
            className="w-full rounded-md px-4 py-3 bg-white text-black placeholder-gray-500 border-2 border-white"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-md bg-black px-6 py-3 font-bold text-white hover:bg-charcoal transition disabled:opacity-60"
        >
          {submitting ? copy("Sending...") : copy("Stay Connected")}
        </button>

        <input type="hidden" name="ml-submit" value="1" />
        <input type="hidden" name="anticsrf" value="true" />

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
