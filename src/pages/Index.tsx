import { useEffect, useRef, useState } from "react";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { RotatingText } from "@/components/ui/rotating-text";
import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from "framer-motion";
import AboutSection from "@/components/sections/AboutSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import StatisticsSection from "@/components/sections/StatisticsSection";
import PricingSection from "@/components/sections/PricingSection";

const N8N_WEBHOOK_URL = "https://n8n.srv998243.hstgr.cloud/webhook/YOUR_WORKFLOW_ID/chat";

const Index = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.8], [1, 0]);

  // State for storing AI response
  const [response, setResponse] = useState<string | null>(null);

  // Generate or retrieve unique userId
  const getUserId = () => {
    let id = localStorage.getItem("userId");
    if (!id) {
      id = `user_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
      localStorage.setItem("userId", id);
    }
    return id;
  };

  const handleWebhookTrigger = async (message: string) => {
    const userId = getUserId();
    try {
      const res = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, message }),
      });
      const data = await res.json();
      if (data?.text) setResponse(data.text);
    } catch (err) {
      console.error("Error calling n8n webhook:", err);
      setResponse("⚠️ Failed to reach AI assistant.");
    }
  };

  return (
    <div className="relative bg-background">
      {/* Hero Section with Fade Animation */}
      <div ref={ref} className="relative h-screen overflow-hidden">
        <motion.div style={{ opacity, scale }} className="fixed top-0 left-0 w-full h-screen z-10">
          <DottedSurface />
          <div className="relative z-10 flex h-screen items-center justify-center">
            <motion.div style={{ opacity: textOpacity }} className="text-center space-y-4 -mt-[70px] sm:-mt-[90px] md:-mt-[110px] lg:-mt-[130px] px-[40px]">
              <div aria-hidden="true" className={cn('pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full', 'bg-gradient-glow', 'blur-[30px]')} />
              <div className="relative">
                <h1 className="font-mono text-5xl sm:text-5x2 md:text-7xl lg:text-8xl font-semibold tracking-tight text-foreground mb-6">Noctana Labs</h1>
                <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed -mt-[30px]">
                  AI that works while you{" "}
                  <RotatingText words={["Sleep", "Build", "Innovate", "Lead", "Revolutionise", "Dream", "Achieve", "Develop"]} className="text-lg sm:text-xl md:text-2xl text-primary font-medium" />
                  .
                </p>
                {/* Trigger Webhook Button */}
                <button
                  className="mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold"
                  onClick={() => handleWebhookTrigger("User clicked Hero button")}
                >
                  Talk to AI
                </button>

                {/* Display AI Response */}
                {response && (
                  <div className="mt-4 p-4 bg-background/80 border border-border rounded-xl">
                    {response}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Content Sections */}
      <div className="relative z-20">
        <AboutSection />
        <FeaturesSection />
        <StatisticsSection />
        <PricingSection />
      </div>
    </div>
  );
};

export default Index;
