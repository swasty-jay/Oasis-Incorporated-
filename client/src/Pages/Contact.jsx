import React from "react";

function Contact() {
  return (
    <>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-2 gap-8 ">
        <div className="max-w-xl mx-auto my-8 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            We’d love to hear from you! Feel free to reach out using the form
            below or email us directly.
          </p>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your email"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your message"
                rows="4"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="max-w-xl mx-auto my-8 p-4">
          <h4 className="font-semibold">call to us</h4>
          <p className="flex justify-center">we are available 24/7</p>
        </div>
      </div>
    </>
  );
}

export default Contact;
