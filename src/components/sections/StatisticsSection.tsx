import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const statistics = [
  { value: 32, suffix: "%", label: "average cost savings per client in the first year" },
  { value: 10000, suffix: "+", label: "hours of manual work automated in 2024" },
  { value: 85, suffix: "%", label: "faster decision-making for operations teams" }
];

const caseStudies = [
  {
    title: "Retail Client",
    description: "Automated inventory checks cut downtime by 40%",
    details: "Streamlined stock management and automated reorder processes"
  },
  {
    title: "Finance Client", 
    description: "Compliance reports generated in seconds, saving 25 hours/month",
    details: "Automated regulatory reporting and compliance tracking"
  }
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const increment = value / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl lg:text-5xl font-bold text-primary">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatisticsSection = () => {
  return (
    <section className="py-24 px-8 bg-gradient-to-b from-muted/20 to-muted/25">{/* Progressive gradient */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            Proof in Numbers
          </h2>
        </motion.div>

        <div className="space-y-16">
          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-4">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Case Studies */}
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="transition-all duration-300 hover:shadow-elegant border-border/50 hover:border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-primary">
                      {study.title}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {study.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.p
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                      className="text-muted-foreground transition-opacity duration-300"
                    >
                      {study.details}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;