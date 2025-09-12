import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  return (
    <section className="py-24 px-8 bg-background/3 backdrop-blur-sm">{/* 3% opacity (97% translucent) */}
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
              Efficiency Without Extra Hands
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From repetitive admin tasks to complex decision-making support, our AI workflows and agents adapt to your business and scale with your needs. Faster operations, lower costs, and smarter outcomes—without adding headcount.
            </p>
          </motion.div>

          {/* Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div className="w-full h-96 rounded-2xl bg-gradient-subtle border border-border/50 p-8 flex items-center justify-center overflow-hidden">
                {/* Geometric shapes representing AI/automation */}
                <div className="relative w-full h-full">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-8 right-8 w-16 h-16 border-2 border-primary/30 rounded-full"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-12 left-12 w-12 h-12 bg-primary/20 rounded-lg"
                  />
                  <motion.div
                    animate={{ x: [0, 20, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-accent/30 rounded-2xl bg-accent/10"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;