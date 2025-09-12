import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, MessageCircle, Bot } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your AI assistant. How can I help you today?", isBot: true }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    const newMessage = { id: Date.now(), text: inputMessage, isBot: false };
    setMessages(prev => [...prev, newMessage]);
    
    // Simulate AI response
    setTimeout(() => {
      const botResponse = { 
        id: Date.now() + 1, 
        text: "Thanks for your message! Our team will get back to you soon. Is there anything specific you'd like to know about our AI solutions?", 
        isBot: true 
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
    
    setInputMessage("");
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
              />
              <Button 
                onClick={handleSendMessage}
                size="icon"
                className="transition-all duration-200"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>

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