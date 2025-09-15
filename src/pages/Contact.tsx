import { motion } from "framer-motion";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Send, MessageCircle, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import { createChat } from '@n8n/chat';
import '@n8n/chat/dist/style.css';

const Contact = () => {
  // Use useEffect to initialize the n8n chat widget after the component has mounted
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // Initialize the n8n chat widget
    // The target is the ID of the div where the chat should be embedded.
    createChat({
      webhookUrl: 'https://n8n.srv998243.hstgr.cloud/webhook/24c7b253-b28f-49d1-810b-c19d56d14030/chat',
      target: '#n8n-chat-container',
      mode: 'fullscreen' // Use 'fullscreen' mode to fill the container div
    });

  }, []); // The empty dependency array ensures this runs only once

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
          {/* Chat Interface - n8n Bot */}
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

            {/* Container for the n8n Chat Widget */}
            {/* The ID #n8n-chat-container must match the 'target' in createChat */}
            <div id="n8n-chat-container" className="h-96"></div>
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
                <p className="text-muted-foreground">
                  Get instant answers to your questions or book a consultation with us by leaving your details with our AI chat feature above.
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