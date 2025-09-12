import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Bot, BarChart3, Puzzle } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-16">
          {/* Services Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Discover how our AI solutions can transform your business operations and drive unprecedented growth.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Service 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              whileHover={{ scale: 1.02, y: -4 }}
              viewport={{ once: true }}
              className="group p-8 rounded-3xl bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border border-border/30 shadow-lg hover:shadow-xl space-y-6 cursor-pointer transition-all duration-200"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center shadow-inner transition-shadow duration-200"
              >
                <Bot className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground transition-colors duration-200">AI Automation</h3>
              <p className="text-muted-foreground leading-relaxed">Streamline repetitive tasks and boost efficiency with intelligent automation workflows.</p>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              viewport={{ once: true }}
              className="group p-8 rounded-3xl bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border border-border/30 shadow-lg hover:shadow-xl space-y-6 cursor-pointer transition-all duration-200"
            >
              <motion.div 
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ duration: 0.2 }}
                className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center shadow-inner transition-shadow duration-200"
              >
                <BarChart3 className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground transition-colors duration-200">Smart Analytics</h3>
              <p className="text-muted-foreground leading-relaxed">Transform data into actionable insights with advanced AI-powered analytics and reporting.</p>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              whileHover={{ scale: 1.02, y: -4 }}
              viewport={{ once: true }}
              className="group p-8 rounded-3xl bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border border-border/30 shadow-lg hover:shadow-xl space-y-6 cursor-pointer transition-all duration-200"
            >
              <motion.div 
                whileHover={{ rotate: 180, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center shadow-inner transition-shadow duration-200"
              >
                <Puzzle className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground transition-colors duration-200">Custom Solutions</h3>
              <p className="text-muted-foreground leading-relaxed">Tailored AI solutions designed specifically for your unique business challenges.</p>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              <Link to="/contact">
                <Button size="lg" className="px-8 py-6 text-lg transition-all duration-200">
                  Talk to our AI
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;