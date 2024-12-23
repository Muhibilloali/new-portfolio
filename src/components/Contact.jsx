import React, { useState } from "react";
import Photo from "../assets/muhibillo_devs.png";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSend = async () => {
    if (!message.trim()) {
      alert("Message field cannot be empty.");
      return;
    }

    const botToken = "7160637523:AAHLbVRgNd7yWO0WsBmvMVzOSau2Ex0q7z4"; // Telegram Bot Token
    const chatId = "6059700809"; // Telegram Chat ID
    const telegramMessage = `New Contact Message:\n\nMessage: ${message}\nEmail: ${
      email || "Not provided"
    }`;

    // Telegram API orqali xabar yuborish
    try {
      await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
          telegramMessage
        )}`
      );
      setSuccessMessage("Your message has been sent successfully!");
      setMessage("");
      setEmail("");
      setCharCount(0);
    } catch (error) {
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
<div 
name="contact"
className="dfsadf">

    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-2xl drop-shadow-[0_4px_6px_rgba(255,255,255,255)] w-[90%] max-w-lg">
        <div className="flex items-center mb-4">
          <img
            src={Photo}
            alt="Profile"
            className="rounded-full w-12 h-12 mr-4"
          />
          <div>
            <h2 className="text-xl font-bold">Muhibillo_ali</h2>
            <p className="text-sm text-gray-400">
              Hey, thanks for visiting! Feel free to send me a message.
            </p>
          </div>
        </div>

        <textarea
          className="w-full p-3 rounded-lg bg-gray-700 text-white mb-4 resize-none"
          placeholder="Write a message..."
          value={message}
          maxLength={1000}
          onChange={(e) => {
            setMessage(e.target.value);
            setCharCount(e.target.value.length);
          }}
        ></textarea>

        <p className="text-sm text-gray-500 mb-4">
          {charCount} / 1000 characters
        </p>

        <input
          type="email"
          className="w-full p-3 rounded-lg bg-gray-700 text-white mb-4"
          placeholder="optional@email.com (if you'd like a response)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg w-full"
          onClick={handleSend}
        >
          Send
        </button>

        {successMessage && (
          <p className="text-green-500 text-sm mt-4">{successMessage}</p>
        )}
      </div>
    </div>

</div>

  );
};

export default Contact;
