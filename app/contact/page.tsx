"use client";

import type { Metadata } from "next";
import { useState } from "react";

// Note: metadata export doesn't work in client components — move to a layout.tsx
// if SEO on this route becomes important.

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [emailError, setEmailError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, _trap: "" }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMsg("Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <div className="animate-card-in max-w-xl mx-auto px-6 py-20" style={{ animationDelay: "100ms" }}>
      <h1 className="font-[family-name:var(--font-display)] text-5xl font-light text-[var(--color-text)] mb-4">
        Get in touch
      </h1>
      <p className="text-sm text-[var(--color-text-muted)] mb-12">
        Whether it&apos;s work, music, or anything else — drop me a message.
      </p>

      {status === "success" ? (
        <div className="border border-[var(--color-border)] p-8">
          <p className="font-[family-name:var(--font-display)] text-2xl font-light text-[var(--color-text)] mb-2">
            Message sent.
          </p>
          <p className="text-sm text-[var(--color-text-muted)]">
            Thanks — I&apos;ll get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Honeypot */}
          <input type="text" name="_trap" className="hidden" tabIndex={-1} aria-hidden="true" />

          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-transparent border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
              onBlur={() => {
                if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                  setEmailError("Enter a valid email address.");
                }
              }}
              required
              className={`bg-transparent border px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none transition-colors ${
                emailError
                  ? "border-red-400 focus:border-red-400"
                  : "border-[var(--color-border)] focus:border-[var(--color-accent)]"
              }`}
            />
            {emailError && (
              <p className="text-xs text-red-400">{emailError}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={6}
              className="bg-transparent border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
            />
          </div>

          {status === "error" && (
            <p className="text-xs text-red-400">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="self-start text-xs uppercase tracking-[0.15em] text-[var(--color-bg)] bg-[var(--color-accent)] px-6 py-3 hover:opacity-80 transition-opacity disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Sending…" : "Send"}
          </button>
        </form>
      )}
    </div>
  );
}
