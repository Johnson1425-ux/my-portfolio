"use client";

import { Check, Copy, Mail, Send, TriangleAlert } from "lucide-react";
import { useState, type FormEvent } from "react";
import { buttonStyles } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * There is no mail backend behind this site, so the form does not pretend to
 * send anything: it validates the input and hands a pre-filled draft to the
 * visitor's own mail client. Swap `handoff()` for a fetch to an API route if
 * you later add a mail provider.
 */

type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const emptyFields: Fields = { name: "", email: "", subject: "", message: "" };

function validate(fields: Fields): Errors {
  const errors: Errors = {};

  if (fields.name.trim().length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  }
  if (!EMAIL_PATTERN.test(fields.email.trim())) {
    errors.email = "Please enter a valid email address so I can reply.";
  }
  if (fields.subject.trim().length < 3) {
    errors.subject = "Please add a short subject.";
  }
  if (fields.message.trim().length < 20) {
    errors.message = "Please give me a little more detail (at least 20 characters).";
  }

  return errors;
}

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "opened" | "failed">("idle");
  const [copied, setCopied] = useState(false);

  const update = (key: keyof Fields) => (value: string) => {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setStatus("idle");
  };

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(fields);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      const firstInvalid = Object.keys(nextErrors)[0];
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    const body = `${fields.message.trim()}\n\n—\n${fields.name.trim()} <${fields.email.trim()}>`;
    const href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      fields.subject.trim(),
    )}&body=${encodeURIComponent(body)}`;

    try {
      window.location.href = href;
      setStatus("opened");
    } catch {
      setStatus("failed");
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="contact-name"
          label="Name"
          value={fields.name}
          onChange={update("name")}
          error={errors.name}
          autoComplete="name"
          placeholder="Ada Lovelace"
        />
        <Field
          id="contact-email"
          label="Email"
          type="email"
          value={fields.email}
          onChange={update("email")}
          error={errors.email}
          autoComplete="email"
          placeholder="you@company.com"
        />
      </div>

      <Field
        id="contact-subject"
        label="Subject"
        value={fields.subject}
        onChange={update("subject")}
        error={errors.subject}
        placeholder="Backend role at [Company]"
      />

      <Field
        id="contact-message"
        label="Message"
        value={fields.message}
        onChange={update("message")}
        error={errors.message}
        multiline
        placeholder="A sentence or two about the role, project or problem…"
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className={buttonStyles({ size: "md" })}>
          <Send className="size-4" aria-hidden="true" />
          Compose email
        </button>

        <button
          type="button"
          onClick={copyEmail}
          className={buttonStyles({ variant: "secondary", size: "md" })}
        >
          {copied ? (
            <Check className="size-4 text-emerald-500" aria-hidden="true" />
          ) : (
            <Copy className="size-4" aria-hidden="true" />
          )}
          {copied ? "Address copied" : "Copy email address"}
        </button>
      </div>

      {/* Status region — announced to screen readers when it changes. */}
      <div aria-live="polite" className="min-h-6">
        {status === "opened" ? (
          <p className="flex items-start gap-2 text-sm text-emerald-600 dark:text-emerald-400">
            <Check className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            Your email client should be open with the message ready — press send there and
            it&apos;s on its way.
          </p>
        ) : null}
        {status === "failed" ? (
          <p className="flex items-start gap-2 text-sm text-red-600 dark:text-red-400">
            <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            Couldn&apos;t open a mail client. Email me directly at{" "}
            <a className="underline" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </p>
        ) : null}
      </div>

      <p className="flex items-start gap-2 rounded-card border border-line bg-background-alt px-4 py-3 text-xs leading-relaxed text-subtle">
        <Mail className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
        This site has no mail server, so nothing is sent or stored here — submitting opens a
        pre-filled draft in your own email client.
      </p>
    </form>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  multiline?: boolean;
};

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  autoComplete,
  multiline,
}: FieldProps) {
  const errorId = `${id}-error`;

  const shared = cn(
    "w-full rounded-card border bg-surface px-4 py-3 text-sm text-foreground",
    "placeholder:text-subtle/70 transition-colors duration-200",
    "focus:outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent-soft",
    error ? "border-red-500/70" : "border-line hover:border-line-strong",
  );

  return (
    <div className={multiline ? "sm:col-span-2" : undefined}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>

      {multiline ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={cn(shared, "resize-y")}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={shared}
        />
      )}

      {error ? (
        <p id={errorId} role="alert" className="mt-2 flex items-center gap-1.5 text-xs text-red-500">
          <TriangleAlert className="size-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  );
}
