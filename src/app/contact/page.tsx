"use client";

import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 animate-fade-in-up">
            Contact Us
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto animate-fade-in-up delay-100" style={{ opacity: 0 }}>
            Get in touch with our team for any inquiries, product questions, or
            smart home consultation.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-in-left">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="text-center py-16 animate-scale-in">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-10 h-10 text-emerald-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 mb-8 max-w-md mx-auto">
                    Thank you for contacting us. Our team will review your
                    message and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        message: "",
                      });
                    }}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    {
                      id: "name",
                      label: "Full Name",
                      type: "text",
                      placeholder: "Your full name",
                      required: true,
                    },
                    {
                      id: "email",
                      label: "Email Address",
                      type: "email",
                      placeholder: "you@example.com",
                      required: true,
                    },
                    {
                      id: "phone",
                      label: "Phone Number",
                      type: "tel",
                      placeholder: "01XXX-XXXXXX",
                      required: false,
                    },
                  ].map((field) => (
                    <div key={field.id} className="relative">
                      <label
                        htmlFor={field.id}
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                          focusedField === field.id ||
                          formData[field.id as keyof typeof formData]
                            ? "-top-2.5 text-xs font-semibold text-blue-600 bg-white px-1"
                            : "top-3.5 text-sm text-gray-400"
                        }`}
                      >
                        {field.label}
                        {field.required && (
                          <span className="text-red-400 ml-0.5">*</span>
                        )}
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        required={field.required}
                        value={
                          formData[field.id as keyof typeof formData]
                        }
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [field.id]: e.target.value,
                          })
                        }
                        onFocus={() => setFocusedField(field.id)}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-0 focus:border-blue-500 outline-none transition-all duration-200"
                      />
                    </div>
                  ))}

                  <div className="relative">
                    <label
                      htmlFor="message"
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        focusedField === "message" || formData.message
                          ? "-top-2.5 text-xs font-semibold text-blue-600 bg-white px-1"
                          : "top-3.5 text-sm text-gray-400"
                      }`}
                    >
                      Message<span className="text-red-400 ml-0.5">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-0 focus:border-blue-500 outline-none transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 active:scale-[0.98]"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Details Sidebar */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="bg-white rounded-2xl shadow-lg p-7 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-5">
                Contact Information
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-500 text-sm">Dhaka, Bangladesh</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a
                      href="tel:09613824682"
                      className="text-blue-600 hover:text-blue-700 text-sm transition-colors"
                    >
                      09613-824682
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a
                      href="mailto:info@aibd.ai"
                      className="text-blue-600 hover:text-blue-700 text-sm transition-colors"
                    >
                      info@aibd.ai
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Business Hours
                    </p>
                    <p className="text-gray-500 text-sm">
                      Sat - Thu: 9:00 AM - 8:00 PM
                    </p>
                    <p className="text-gray-500 text-sm">
                      Fri: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-48 flex items-center justify-center border border-gray-200 overflow-hidden relative">
              <div className="text-center">
                <svg
                  className="w-10 h-10 text-gray-400 mx-auto mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-gray-400 text-sm font-medium">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-7 text-white text-center">
              <h3 className="text-lg font-bold mb-2">Need Urgent Help?</h3>
              <p className="text-blue-200 mb-5 text-sm">
                Our support team is available 24/7
              </p>
              <a
                href="tel:09613824682"
                className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call 09613-824682
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
