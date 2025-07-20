import React from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [message, setMessage] = React.useState<{ email: string; text: string }>(
    {
      text: "",
      email: "",
    }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const text = `📩 *New Message!*\n\n👤 Email: ${message.email}\n📝 Message: ${message.text}`;

    if (message.email !== "" && message.text !== "") {
      await fetch(
        `https://api.telegram.org/bot7542094363:AAGklLYX1RyBv6vMBfPWr3tJeFh3nzBnsws/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: "1132356521",
            text,
            parse_mode: "Markdown",
          }),
        }
      );
      setMessage({ text: "", email: "" });
      toast.success("Message sent!");
    } else {
      toast.error("email and message required");
    }
  };

  return (
    <section id="contact" className="w-full text-center px-[55px] my-[70px] ">
      <div className="flex gap-4 flex-col items-center">
        <input
          value={message.email}
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setMessage((prev) => ({ ...prev, email: e.target.value }))
          }
          required
          className="bg-transparent border w-full text-white  border-white/30 rounded-md px-4 py-3 placeholder-white/60 focus:outline-none focus:border-white transition duration-200"
        />

        <textarea
          value={message.text}
          onChange={(e) =>
            setMessage((prev) => ({ ...prev, text: e.target.value }))
          }
          placeholder="Message"
          rows={5}
          required
          className="bg-transparent border w-full text-white border-white/30 rounded-md px-4 py-3 placeholder-white/60 focus:outline-none focus:border-white transition duration-200 resize-none"
        ></textarea>

        <button
          onClick={handleSubmit}
          className="border px-5 py-2 border-white text-white hover:bg-slate-800/50 transition-all cursor-pointer rounded-md mt-5"
        >
          Send Me Message
        </button>
      </div>
    </section>
  );
}
