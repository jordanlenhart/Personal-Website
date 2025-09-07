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
    setStatus("");

    if (!form.name || !form.email || !form.message) {
      setStatus("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setStatus("Sending...");

    const { error } = await supabase.from("contacts").insert([form]);

    if (error) {
      console.error(error);
      setStatus("Error sending message. Please try again.");
    } else {
      setStatus("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section
      id="contact"
      className="text-white flex flex-col justify-center items-center px-6 min-h-screen snap-center h-[60em] md:h-[75em]"
    >
      <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-10 text-center">
        Leave A Message
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl flex flex-col gap-6"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-4 sm:p-5 md:p-6 border border-white rounded-xl text-lg sm:text-xl md:text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-4 sm:p-5 md:p-6 border border-white rounded-xl text-lg sm:text-xl md:text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="6"
          required
          className="w-full p-4 sm:p-5 md:p-6 border border-white rounded-xl text-lg sm:text-xl md:text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-4 sm:py-5 md:py-6 rounded-xl text-lg sm:text-xl md:text-2xl hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
        >
          Send
        </button>
      </form>

      {status && <p className="mt-6 text-gray-400 text-center text-lg sm:text-xl">{status}</p>}
    </section>
  );
}
