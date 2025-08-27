import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://vvwqeworuhpfifroimsa.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2d3Fld29ydWhwZmlmcm9pbXNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyNTUxODAsImV4cCI6MjA3MTgzMTE4MH0.dMIs24YrAPybu1-2k4tCIiNqU_EIb9lFXoIhobXNUkI"
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(""); // clear previous status

    // Basic validation
    if (!form.name || !form.email || !form.message) {
      setStatus("❌ All fields are required.");
      return;
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatus("❌ Please enter a valid email address.");
      return;
    }

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