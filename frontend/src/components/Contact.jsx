import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// ⬇️ Replace with your Supabase project details
const supabase = createClient(
  "https://YOUR_PROJECT_ID.supabase.co",
  "YOUR_PUBLIC_ANON_KEY"
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const { error } = await supabase.from("contacts").insert([form]);

    if (error) {
      console.error(error);
      setStatus("❌ Error sending message. Please try again.");
    } else {
      setStatus("✅ Message sent! Thank you.");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="bg-[#0D1B2A] text-white mx-auto px-6 py-20 text-center h-screen snap-center flex flex-col justify-center items-center">
      <h2 className="text-5xl font-bold mb-10">Leave A Message</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 border rounded-xl"
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-3 border rounded-xl"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="4"
          required
          className="w-full p-3 border rounded-xl"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600"
        >
          Send
        </button>
      </form>

      {status && <p className="mt-4 text-gray-600">{status}</p>}
    </section>
  );
}