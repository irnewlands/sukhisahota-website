import { useState } from "react";
import { Mail, Check, AlertCircle } from "lucide-react";

/**
 * Newsletter Signup Component
 * Captures supporter emails with validation and feedback
 * Design: Warm Civic Modernism - clean, accessible form with orange accents
 */

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      // In a real implementation, this would send to a backend or email service
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate success
      setStatus("success");
      setMessage("Thanks for signing up! Check your email for confirmation.");
      setEmail("");

      // Reset to idle after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "8px",
        padding: "2rem",
        backdropFilter: "blur(8px)",
      }}
    >
      <div style={{ marginBottom: "1.5rem" }}>
        <h3
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "1.3rem",
            fontWeight: 700,
            color: "white",
            marginBottom: "0.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <Mail size={24} />
          Stay Updated
        </h3>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "rgba(255, 255, 255, 0.85)" }}>
          Get campaign updates, event announcements, and grassroots organizing opportunities delivered to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ display: "flex", gap: "0.75rem" }} className="flex-col md:flex-row">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            style={{
              flex: 1,
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.95rem",
              padding: "0.75rem 1rem",
              borderRadius: "4px",
              border: "2px solid rgba(255,255,255,0.25)",
              background: "rgba(0,0,0,0.75)",
              color: "white",
              outline: "none",
              transition: "box-shadow 0.18s",
              opacity: status === "loading" ? 0.6 : 1,
            }}
            onFocus={(e) => {
              (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(220, 84, 36, 0.3)";
            }}
            onBlur={(e) => {
              (e.target as HTMLInputElement).style.boxShadow = "none";
            }}
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.95rem",
              fontWeight: 600,
              padding: "0.75rem 1.5rem",
              borderRadius: "4px",
              border: "none",
              background: status === "success" ? "rgba(34, 197, 94, 0.9)" : "black",
              color: status === "success" ? "white" : "var(--color-ndp-orange)",
              cursor: status === "loading" || status === "success" ? "not-allowed" : "pointer",
              transition: "all 0.18s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              minWidth: "120px",
              opacity: status === "loading" || status === "success" ? 0.8 : 1,
            }}
            onMouseEnter={(e) => {
              if (status !== "loading" && status !== "success") {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
              }
            }}
            onMouseLeave={(e) => {
              if (status !== "loading" && status !== "success") {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
              }
            }}
          >
            {status === "loading" && <span style={{ animation: "spin 1s linear infinite" }}>⟳</span>}
            {status === "success" && <Check size={18} />}
            {status === "idle" || status === "error" ? "Subscribe" : ""}
          </button>
        </div>

        {/* Status Messages */}
        {status === "success" && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.75rem 1rem",
              borderRadius: "4px",
              background: "rgba(34, 197, 94, 0.15)",
              border: "1px solid rgba(34, 197, 94, 0.5)",
              color: "rgba(34, 197, 94, 0.9)",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.9rem",
              animation: "slideIn 0.3s ease-out",
            }}
          >
            <Check size={18} />
            {message}
          </div>
        )}

        {status === "error" && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.75rem 1rem",
              borderRadius: "4px",
              background: "rgba(239, 68, 68, 0.15)",
              border: "1px solid rgba(239, 68, 68, 0.5)",
              color: "rgba(239, 68, 68, 0.9)",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.9rem",
              animation: "slideIn 0.3s ease-out",
            }}
          >
            <AlertCircle size={18} />
            {message}
          </div>
        )}

        {/* Privacy notice */}
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.65)", textAlign: "center" }}>
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>

      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
