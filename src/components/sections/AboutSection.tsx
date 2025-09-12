import { motion } from "framer-motion";
import { SplineScene } from "@/components/ui/splite";

const AboutSection = () => {
  return (
    <section className="py-24 px-8 bg-muted/50 backdrop-blur-sm">
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

          {/* Spline 3D Scene */}
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
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full min-h-[500px] rounded-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;