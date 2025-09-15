import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, MessageCircle, Bot } from "lucide-react";
import { Link } from "react-router-dom";

const N8N_WEBHOOK_URL = "https://n8n.srv998243.hstgr.cloud/webhook/24c7b253-b28f-49d1-810b-c19d56d14030/chat"; // replace with your webhook

const Contact = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your AI assistant. How can I help you today?", isBot: true }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [chatClosed, setChatClosed] = useState(false);

  // Load messages from localStorage
  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  // Save messages to localStorage whenever they update
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newMessage = { id: Date.now(), text: inputMessage, isBot: false };
    setMessages(prev => [...prev, newMessage]);
    setInputMessage("");

    try {
      const res = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: inputMessage })
      });

      const data = await res.json();

      const botResponse = {
        id: Date.now() + 1,
        text: data.text || "No response from assistant.",
        isBot: true
      };
      setMessages(prev => [...prev, botResponse]);

      // Close chat if trigger message appears
      if ((data.text || "").toLowerCase().includes("thank you for your interest")) {
        setChatClosed(true);
      }
    } catch (error) {
      const errorResponse = {
        id: Date.now() + 2,
        text: "⚠️ Error connecting to AI assistant.",
        isBot: true
      };
      setMessages(prev => [...prev, errorResponse]);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
              Noctana Labs
            </Link>
            <Link to="/">
              <Button variant="outline" size="sm">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-24">
        <div className="space-y-16">
          {/* Chat Interface */}
          {!chatClosed ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">Chat with AI</h2>
              </div>

              {/* Chat Messages */}
              <div className="h-96 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border border-border/30 rounded-2xl p-6 overflow-y-auto space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                      message.isBot 
                        ? 'bg-primary/10 text-foreground border border-primary/20' 
                        : 'bg-primary text-primary-foreground'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="flex gap-3">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                  disabled={chatClosed}
                />
                <Button 
                  onClick={handleSendMessage}
                  size="icon"
                  className="transition-all duration-200"
                  disabled={chatClosed}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ) : (
            <div className="p-6 text-center border rounded-2xl bg-muted">
              <p className="text-lg text-muted-foreground">
                Conversation ended. Thank you!
              </p>
            </div>
          )}

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ready to transform your business with AI? Start a conversation with our intelligent assistant above or reach out to our team directly.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border border-border/30">
                <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>📧 hello@noctanalabs.com</p>
                  <p>📞 +1 (555) 123-4567</p>
                  <p>🏢 San Francisco, CA</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                <div className="flex items-center gap-3 mb-3">
                  <Bot className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">AI Assistant</h3>
                </div>
                <p className="text-muted-foreground">
                  Get instant answers to your questions using our AI chat feature above.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
