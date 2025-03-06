import { useEffect, useState } from "react";
import { io } from "socket.io-client";

// Connect to the backend
const socket = io("http://localhost:5000", {
  reconnectionAttempts: 5, // Retry connection 5 times
  timeout: 5000, // Wait 5s before failing
});

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState("🔴 Connecting...");

  useEffect(() => {
    // Show a success message when connected
    socket.on("connection_success", (msg) => {
      setStatus(`🟢 ${msg}`); // Update status when connected
    });

    // Show received messages
    socket.on("receive_message", (msg) => {
      console.log("Received message:", msg); // Log the message to ensure it's coming through
      setMessages((prev) => [...prev, msg]);
    });

    // Handle connection errors
    socket.on("connect_error", () => {
      setStatus("🔴 Connection Failed! Retrying...");
    });

    return () => {
      socket.off("connection_success");
      socket.off("receive_message");
      socket.off("connect_error");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() !== "") {
      socket.emit("send_message", message);
      setMessage(""); // Clear input field
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "400px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h2>Chat Room</h2>

      {/* Connection Status */}
      <p
        style={{
          fontWeight: "bold",
          color: status.includes("🟢") ? "green" : "red",
        }}
      >
        {status}
      </p>

      {/* Chat Messages */}
      <div
        style={{
          border: "1px solid gray",
          height: "200px",
          overflowY: "auto",
          padding: "10px",
        }}
      >
        {messages.map((msg, index) => (
          <p
            key={index}
            style={{
              background: "#f1f1f1",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            {msg}
          </p>
        ))}
      </div>

      {/* Input Box */}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        style={{ marginTop: "10px", padding: "5px", width: "80%" }}
      />
      <button
        onClick={sendMessage}
        style={{ marginLeft: "10px", padding: "5px 10px" }}
      >
        Send
      </button>
    </div>
  );
};

export default Chat;
