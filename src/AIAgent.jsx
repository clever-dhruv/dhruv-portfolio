import { useState } from "react";

function AIAgent() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAgent() {
    if (!message.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("https://dhruv-ai-agent-2.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: message
        })
      });

      const data = await res.json();

      setResponse(data.response);
    } catch (error) {
      setResponse("Unable to connect to Dhruv AI.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="ai-agent">
      <input
        type="text"
        placeholder="Ask me about Dhruv..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={askAgent} disabled={loading}>
        {loading ? "Thinking..." : "Ask Dhruv AI"}
      </button>

      {response && (
        <div className="agent-response">
          {response}
        </div>
      )}
    </div>
  );
}

export default AIAgent;