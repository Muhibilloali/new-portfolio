import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState(""); // State to manage the display message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ephjt9j",
        "template_0gpywyi",
        form.current,
        {
          publicKey: "p1a_7LhgGVFO7Qhts",
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          console.log("ok");
          setMessage("Your message has been sent to Muhibillo Abduqaxxorov"); // Set success message
          form.current.reset(); // Reset the form fields
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  // Hide the message after 5 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 5000);

      // Clean up the timer
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div
      name="contact"
      className="w-full pb-6 text-gray-900 dark:text-white bg-[#F3F4F5] dark:bg-slate-900"
    >
      <div className="flex flex-col p-4 container mx-auto justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-extrabold text-slate-900 dark:text-white inline border-b-4 border-[#ffca3a]">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <div className="contact"></div>
          <form
            ref={form}
            onSubmit={sendEmail}
            action="https://getform.io/f/7e5e51a3-f89a-43c3-b270-8be6baef5b6e"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-gray-400 border-2 rounded-md text-gray-900 dark:text-white focus:outline-none"
              required // Adding the required attribute
            />
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-gray-400 border-2 rounded-md text-gray-900 dark:text-white focus:outline-none"
              required // Adding the required attribute
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-gray-400 border-2 rounded-md text-gray-900 dark:text-white focus:outline-none"
              required // Adding the required attribute
            ></textarea>

            <button
              type="submit"
              value="Send"
              className="mt-4 relative text-sm font-medium text-gray-500 active:text-white group focus:outline-none focus:ring"
            >
              <span className="absolute inset-0 border-gray-400 rounded-md border-2"></span>
              <span className="block px-12 py-3 rounded-md transition-transform bg-white border border-current group-hover:-translate-x-1 group-hover:-translate-y-1">
                Send
              </span>
            </button>
          </form>
        </div>
        {message && ( // Conditionally render the message
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-green-500 text-white p-10 font-bold text-xl rounded-md shadow-lg">
              {message}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
