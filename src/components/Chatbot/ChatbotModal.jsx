import React, { useState, useRef, useEffect } from "react";
import my_img from "../../assets/images/pp.jpg";
import { FaMinus } from "react-icons/fa6";
import { MdOutlineRefresh } from "react-icons/md";
import { FiSend } from "react-icons/fi";

const ChatbotModal = ({ handleChatBotModalClose }) => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi there! 👋 How can I assist you today?" },

  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const convertMarkdownToHtml = (markdown) => {
    markdown = markdown.replace(/^(#{1,6})\s*(.*)$/gm, (_, hashes, content) => {
      const level = hashes.length;
      return `<h${level}>${content}</h${level}>`;
    });

    markdown = markdown.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    markdown = markdown.replace(/\*(.*?)\*/g, "<em>$1</em>");
    markdown = markdown.replace(
      /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g,
      '<a href="$2" target="_blank">$1</a>'
    );

    markdown = markdown.replace(/^\s*-\s+(.*)$/gm, (match, content) => {
      return `<ul><li>${content}</li></ul>`;
    });

    markdown = markdown.replace(/^\s*\d+\.\s+(.*)$/gm, (match, content) => {
      return `<ol><li>${content}</li></ol>`;
    });

    markdown = markdown.replace(
      /```(\w*)\s*([\s\S]*?)\s*```/g,
      (_, lang, content) => {
        return `<pre><code class="${lang}">${content}</code></pre>`;
      }
    );

    markdown = markdown.replace(/`([^`]+)`/g, "<code>$1</code>");
    return markdown;
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleMessageRefresh = () => {
    setMessages([{ role: "assistant", content: "Hi there! 👋 How can I assist you today?" }]);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    setMessages((prevMessages) => [...prevMessages, { role: "user", content: inputValue }]);
    setInputValue("");

    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "assistant", content: "...typing" },
    ]);

    try {
      const queryData = {
        convo: [...messages, { role: "user", content: inputValue }],
        agent: true,
        agent_id: "678d27868597903b7e9f488d_Roman Humagain",
      };

      const response = await fetch("https://api.fagoon.ai/api/v1/upgrade/chat", {
        method: "POST",
        body: JSON.stringify(queryData),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();
      const responseMessage = data ? convertMarkdownToHtml(data) : "No response from server";

      setMessages((prevMessages) => {
        const newMessages = prevMessages.filter((msg) => msg.content !== "...typing");
        return [...newMessages, { role: "assistant", content: responseMessage }];
      });
    } catch (error) {
      setMessages((prevMessages) => {
        const newMessages = prevMessages.filter((msg) => msg.content !== "...typing");
        return [...newMessages, { role: "assistant", content: "Sorry, please try again." }];
      });
    }
  };

  return (
    <div className="fixed bottom-0 right-1 bg-gray-50 rounded-tl-xl rounded-tr-xl h-[90%] w-full max-w-[96%] md:h-[76%] lg:h-[77%] md:w-[330px] lg:w-[372px] flex flex-col shadow-lg">
      <div className="flex items-center justify-between p-3 rounded-tl-xl rounded-tr-xl bg-gradient-to-r from-red-500 to-purple-500">
        <div className="flex items-center gap-2 md:gap-3">
          <img
            src={my_img}
            alt="Profile"
            className="object-cover w-[34px] h-[34px] md:w-[42px] md:h-[42px] rounded-full"
          />
          <div className="flex flex-col">
            <p className="font-semibold text-white text-md">Roman Humagain</p>
            <p className="text-xs text-gray-200">Software Developer</p>
          </div>
        </div>
        <div className="flex gap-3">
          <MdOutlineRefresh className=" text-[23px] md:text-[22px] text-white cursor-pointer" onClick={handleMessageRefresh} />
          <FaMinus className="text-[23px] md:text-[22px] text-white cursor-pointer" onClick={handleChatBotModalClose} />
        </div>
      </div>

      <div className="flex-grow p-4 space-y-3 overflow-y-auto bg-gradient-to-tr from-slate-200 to-slate-300 dark:from-neutral-700 dark:to-neutral-900">
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-start gap-3 ${msg.role === "user" ? "flex-row-reverse self-end" : ""}`}>
            {msg.role === "assistant" && (
              <img
                src={my_img}
                alt={msg.role === "assistant" ? "Assistant" : "User"}
                className="object-cover w-[28px] h-[28px] rounded-full"
              />
            )}
            <div
              className={`p-3 text-sm rounded-lg shadow-md text-gray-800 dark:text-gray-200 ${
                msg.role === "user" ? "bg-slate-300 dark:bg-neutral-900" : "bg-gray-100 dark:bg-neutral-800"
              }`}
              dangerouslySetInnerHTML={{ __html: msg.content }}
            />
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex items-center p-3 bg-gradient-to-r from-red-400 to-purple-400">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-grow px-3 pt-[10px] pb-[10px] text-sm bg-gray-100 dark:bg-neutral-700 rounded-l-lg outline-none text-gray-800 dark:text-gray-100"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleSendMessage();
          }}
        />
        <button
          className="px-3 pt-[11px] pb-[11px] text-white bg-purple-600 rounded-r-lg hover:bg-purple-700"
          onClick={handleSendMessage}
        >
          <FiSend />
        </button>
      </div>
    </div>
  );
};

export default ChatbotModal;
