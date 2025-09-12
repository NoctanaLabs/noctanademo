import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const pricingPlans = [
  {
    name: "AI Templates",
    features: [
      "Ready-to-use workflows",
      "Quick setup", 
      "Instant automation"
    ],
    popular: false
  },
  {
    name: "Custom Made AI",
    features: [
      "Tailored to your processes",
      "Scalable solutions",
      "Priority support"
    ],
    popular: true
  },
  {
    name: "AI Agent Suite",
    features: [
      "Dedicated AI agents",
      "End-to-end operations",
      "24/7 performance"
    ],
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section className="py-24 px-8 bg-muted/15 backdrop-blur-sm">{/* 50% less opaque */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-8">
            Flexible Plans for Every Business
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            All plans are custom-priced to match business needs.
          </p>
          
          {/* Main CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 rounded-full"
            >
              Unlock Your AI-Powered Workflow
            </Button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 md:max-w-4xl md:mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -top-6 inset-x-0 z-10 flex justify-center"
                >
                  <div className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-elegant pointer-events-none">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </motion.div>
              )}
              
              <Card className={`h-96 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/30 hover:border-primary/40 hover:shadow-glow group-hover:bg-card/70 ${
                plan.popular ? 'border-primary/40 shadow-glow bg-card/60 scale-105' : ''
              }`}>
                <CardHeader className="text-center pb-6 pt-8">
                  <CardTitle className="text-2xl font-bold tracking-tight mb-4 text-foreground">
                    {plan.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-9 pb-8 flex flex-col items-center">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground leading-relaxed text-left">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;