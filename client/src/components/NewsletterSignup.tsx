import { Mail } from "lucide-react";
import { useState } from "react";

export default function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="rounded-xl border border-white/30 bg-white/10 p-6 md:p-8 text-center">
      <iframe name="mailerlite-hidden-frame" style={{ display: "none" }} />

      <div className="flex items-center justify-center gap-3 mb-4">
        <Mail className="w-7 h-7 text-white" />
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-white">
          Stay Updated
        </h3>
      </div>

      <p className="text-white/90 mb-6 max-w-2xl mx-auto">
        Get future campaign updates, event announcements, and grassroots organizing opportunities delivered to your inbox.
      </p>

      {submitted && (
        <div className="mb-4 rounded-xl border border-white/30 bg-white/10 p-4 text-white">
          ✓ Thank you — your details have been submitted.
        </div>
      )}

      <form
        action="https://assets.mailerlite.com/jsonp/2430134/forms/190139921541891187/subscribe"
        method="post"
        target="mailerlite-hidden-frame"
        onSubmit={(e) => {
          setTimeout(() => {
            e.currentTarget.reset();
            setSubmitted(true);
          }, 500);
        }}
        className="space-y-4 max-w-2xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" name="fields[name]" placeholder="First name" required autoComplete="given-name" className="w-full rounded-md px-4 py-3 bg-white text-black placeholder-gray-500 border-2 border-white" />
          <input type="text" name="fields[last_name]" placeholder="Last name" required autoComplete="family-name" className="w-full rounded-md px-4 py-3 bg-white text-black placeholder-gray-500 border-2 border-white" />
        </div>

        <input type="email" name="fields[email]" placeholder="your@email.com" required autoComplete="email" className="w-full rounded-md px-4 py-3 bg-white text-black placeholder-gray-500 border-2 border-white" />

        <button type="submit" className="w-full rounded-md bg-black px-6 py-3 font-bold text-white hover:bg-charcoal transition">
          Stay Connected
        </button>

        <input type="hidden" name="ml-submit" value="1" />
        <input type="hidden" name="anticsrf" value="true" />

        <p className="text-sm text-white/80">
          We respect your privacy. Unsubscribe at any time by e-mailing: info@sukhisahota.ca
        </p>
      </form>
    </div>
  );
}
