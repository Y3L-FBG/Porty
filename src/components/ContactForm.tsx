import { FormEvent, useState } from "react";
import { sendContactMessage } from "../api/client";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await sendContactMessage(form);
      if (res.success) {
        setStatus("sent");
        setFeedback(res.message ?? "Message sent!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setFeedback(res.message ?? "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setFeedback(
        "Couldn't reach the server. Make sure the backend is running on port 3000."
      );
    }
  }

  const inputClasses =
    "rounded-lg border border-pink px-3.5 py-2.5 text-sm focus:border-transparent focus:outline focus:outline-2 focus:outline-yellow";

  return (
    <section id="contact" className="mx-auto max-w-xl px-6 pb-20 pt-8">
      <h2 className="mb-8 text-center text-3xl font-bold text-ink">
        Get in touch
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 rounded-2xl bg-white p-8 shadow-[0_20px_40px_-25px_rgba(0,0,0,0.25)]"
      >
        <label className="flex flex-col gap-1.5 text-sm font-semibold text-ink">
          Name
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-semibold text-ink">
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-semibold text-ink">
          Message
          <textarea
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`${inputClasses} resize-y`}
          />
        </label>

        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-yellow px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 hover:bg-yellow-dark disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>

        {feedback && (
          <p
            className={`text-sm ${
              status === "error" ? "text-red-600" : "text-emerald-700"
            }`}
          >
            {feedback}
          </p>
        )}
      </form>
    </section>
  );
}
