import React from "react";
import { useState } from "react";

export default function NGOWebsite() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for volunteering! We'll get in touch soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-lime-500 text-white p-6 text-center text-3xl font-extrabold shadow-lg">
        🌱 NGO For Change
      </header>

      {/* Home Section */}
      <section className="p-10 text-center bg-green-50">
        <h1 className="text-4xl font-bold mb-4 text-green-700">Be the Change You Wish to See 🌍</h1>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg">
          At <strong>NGO For Change</strong>, we ignite hope, build futures, and create a ripple effect of compassion. Through education, healthcare, and sustainability, we empower individuals and strengthen communities. Let's walk this path of change together.
        </p>
      </section>

      {/* About Us Section */}
      <section className="p-10 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-6 text-green-800">Who We Are ✨</h2>
        <p className="max-w-2xl mx-auto text-gray-800 text-lg">
          We are a passionate group of changemakers striving for social impact. From village schools to city streets, our work spans across healthcare camps, tree plantation drives, and skill-building programs. Our mission is simple — empower lives and embrace humanity.
        </p>
      </section>

      {/* Volunteer Form */}
      <section className="p-10 bg-gradient-to-b from-green-50 to-white">
        <h2 className="text-3xl font-semibold text-center mb-6 text-green-700">Join the Movement 🤝</h2>
        <p className="text-center mb-6 text-gray-600 max-w-xl mx-auto">
          Want to make a difference? Fill out the form below and be a part of something meaningful.
        </p>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white p-6 shadow-xl rounded-xl border border-green-200"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            name="message"
            placeholder="Tell us why you want to volunteer"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-200 font-medium"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white text-center p-5 mt-10 text-sm">
        © 2025 NGO For Change | Made with ❤️ and Purpose
      </footer>
    </div>
  );
}
