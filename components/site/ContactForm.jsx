"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const EMPTY = { name: "", email: "", company: "", phone: "", message: "", website: "" };

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const [data, setData] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const update = (e) => setData((d) => ({ ...d, [e.target.name]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      setData(EMPTY);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} aria-labelledby="enquiry-title">
      <h2 id="enquiry-title" className="label">{t("title")}</h2>

      <div className="form__row">
        <Field name="name" label={t("name")} value={data.name} onChange={update} autoComplete="name" required />
        <Field name="email" type="email" label={t("email")} value={data.email} onChange={update} autoComplete="email" required dir="ltr" />
      </div>
      <div className="form__row">
        <Field name="company" label={t("company")} value={data.company} onChange={update} autoComplete="organization" optional={t("optional")} />
        <Field name="phone" type="tel" label={t("phone")} value={data.phone} onChange={update} autoComplete="tel" optional={t("optional")} dir="ltr" />
      </div>

      <div className="field">
        <label className="field__label" htmlFor="message">{t("message")}</label>
        <textarea
          id="message"
          name="message"
          className="field__input"
          rows={5}
          required
          aria-describedby="message-hint"
          value={data.message}
          onChange={update}
        />
        <span id="message-hint" className="field__hint">{t("messageHint")}</span>
      </div>

      {/* Honeypot: hidden from people, often filled in by bots. */}
      <div className="visually-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" value={data.website} onChange={update} />
      </div>

      <div role="status" aria-live="polite">
        {status === "success" ? <p className="form__status">{t("success")}</p> : null}
        {status === "error" ? <p className="form__status form__status--error">{t("error")}</p> : null}
      </div>

      <div className="form__footer">
        <button type="submit" className="btn btn--ink" disabled={status === "sending"}>
          {status === "sending" ? t("sending") : t("submit")}
          {status === "sending" ? null : <span className="arrow" aria-hidden="true">→</span>}
        </button>
        <p className="form__note">{t("privacy")}</p>
      </div>
    </form>
  );
}

function Field({ name, label, optional, type = "text", ...rest }) {
  return (
    <div className="field">
      <label className="field__label" htmlFor={name}>
        <span>{label}</span>
        {optional ? <span className="field__optional">{optional}</span> : null}
      </label>
      <input id={name} name={name} type={type} className="field__input" {...rest} />
    </div>
  );
}
