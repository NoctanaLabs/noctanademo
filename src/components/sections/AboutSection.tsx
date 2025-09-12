import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-24 px-8 bg-muted/50 backdrop-blur-sm">
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
            <div className="p-8 rounded-2xl bg-gradient-subtle border border-border/50 space-y-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-primary/60 rounded-sm"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">AI Automation</h3>
              <p className="text-muted-foreground">Streamline repetitive tasks and boost efficiency with intelligent automation workflows.</p>
            </div>

            {/* Service 2 */}
            <div className="p-8 rounded-2xl bg-gradient-subtle border border-border/50 space-y-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-primary/60 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Smart Analytics</h3>
              <p className="text-muted-foreground">Transform data into actionable insights with advanced AI-powered analytics and reporting.</p>
            </div>

            {/* Service 3 */}
            <div className="p-8 rounded-2xl bg-gradient-subtle border border-border/50 space-y-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-primary/60 rounded-md rotate-45"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Custom Solutions</h3>
              <p className="text-muted-foreground">Tailored AI solutions designed specifically for your unique business challenges.</p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button size="lg" className="px-8 py-6 text-lg">
              Talk to our AI
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;