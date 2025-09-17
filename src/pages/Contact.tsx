import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, MessageCircle, Bot } from "lucide-react";
import { Link } from "react-router-dom";

const N8N_WEBHOOK_URL =
  "https://n8n.srv998243.hstgr.cloud/webhook/24c7b253-b28f-49d1-810b-c19d56d14030/chat";

// Cross-browser session ID generator
const generateSessionId = () => {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  } else {
    return (
      Math.random().toString(36).substring(2, 10) +
      Math.random().toString(36).substring(2, 10) +
      Date.now().toString(36)
    );
  }
};

// Cookie helpers
const setCookie = (name: string, value: string, hours: number) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + hours * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/`;
};

const getCookie = (name: string) => {
  const matches = document.cookie.match(
    new RegExp("(?:^|; )" + name.replace(/([.$?*|{}()[]\/+^])/g, "\\$1") + "=([^;]*)")
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

const Contact = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I am Noct AI assistant. How may I assist you today?",
      isBot: true,
    },
  ]);

  const [inputMessage, setInputMessage] = useState("");
  const [chatClosed, setChatClosed] = useState(false);

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const sessionId = useRef(generateSessionId());

  // Restore chat state from cookies on mount
  useEffect(() => {
    const savedMessages = getCookie("chat_messages");
    const savedClosed = getCookie("chat_closed");

    if (savedMessages) setMessages(JSON.parse(savedMessages));
    if (savedClosed === "true") setChatClosed(true);

    // Scroll page to top after layout
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
  }, []);

  // Save chat state to cookies whenever it changes (1 hour expiry)
  useEffect(() => {
    setCookie("chat_messages", JSON.stringify(messages), 1);
    setCookie("chat_closed", chatClosed.toString(), 1);
  }, [messages, chatClosed]);

  // Scroll chat container to bottom only on new messages
  const initialMount = useRef(true);
  useEffect(() => {
    if (initialMount.current) {
      initialMount.current = false;
      return;
    }
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (chatClosed || !inputMessage.trim()) return;

    const userMessage = { id: Date.now(), text: inputMessage, isBot: false };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");

    const typingId = Date.now() + 0.1;
    setMessages((prev) => [...prev, { id: typingId, text: "Typing...", isBot: true }]);

    try {
      const res = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chatInput: inputMessage,
          sessionId: sessionId.current,
        }),
      });

      let data;
      try {
        data = await res.json();
      } catch {
        data = { text: await res.text() };
      }

      // Remove typing indicator
      setMessages((prev) => prev.filter((m) => m.id !== typingId));

      const botResponse = {
        id: Date.now() + 1,
        text: data.text || "No response from assistant.",
        isBot: true,
      };
      setMessages((prev) => [...prev, botResponse]);

      // Close chat if trigger message appears
      if ((data.text || "").toLowerCase().includes("thank you for your interest, we will be in contact with you shortly.")) {
        setChatClosed(true);
      }
    } catch (error) {
      setMessages((prev) => prev.filter((m) => m.id !== typingId));

      const errorResponse = {
        id: Date.now() + 2,
        text: "⚠️ Error connecting to AI assistant.",
        isBot: true,
      };
      setMessages((prev) => [...prev, errorResponse]);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
            Noctana Labs
          </Link>
          <Link to="/">
            <Button variant="outline" size="sm">Back to Home</Button>
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-24 space-y-16">
        {/* Chat Interface */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold text-foreground">Chat with AI</h2>
          </div>

          <div ref={chatContainerRef} className="h-96 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border-2 border-primary/50 shadow-elegant rounded-2xl p-6 overflow-y-auto space-y-4 hover:border-primary/70 transition-all duration-300">
            {messages.map((message) => (
              <motion.div key={message.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${message.isBot ? "bg-primary/10 text-foreground border border-primary/20" : "bg-primary text-primary-foreground"}`}>
                  <p className="text-sm">{message.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {chatClosed && (
            <div className="text-center text-sm text-muted-foreground mt-2">
              Conversation has ended.
            </div>
          )}

          <div className="flex gap-3">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={chatClosed ? "Chat has ended." : "Type your message..."}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1"
              disabled={chatClosed}
            />
            <Button onClick={handleSendMessage} size="icon" disabled={chatClosed}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">Get in Touch</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">Ready to transform your business with AI? Start a conversation with our intelligent assistant above or reach out to our team directly.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border border-border/30">
              <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>📧 contact@noctanalabs.com</p>
                <p>📞 +65 ---- ----</p>
                <p>🏢 Singapore</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <Bot className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">AI Assistant</h3>
              </div>
              <p className="text-muted-foreground">Get instant answers to your questions using our AI chat feature above.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
