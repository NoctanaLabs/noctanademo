import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

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
    <section className="py-24 px-8">
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
            className="flex justify-center"
          >
            <Link to="/contact">
              <Button 
                size="lg"
                className="px-8 py-6 text-lg transition-all duration-200"
              >
                Unlock Your AI-Powered Workflow
              </Button>
            </Link>
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
              
              <Card className={`h-96 transition-all duration-300 bg-card/50 backdrop-blur-sm relative ${
                plan.popular 
                  ? 'border-primary/60 shadow-[0_0_30px_hsl(var(--primary)/0.4),0_0_60px_hsl(var(--primary)/0.2)] bg-card/60 scale-105 before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-primary/80 before:via-primary/50 before:to-primary/80 before:-z-10' 
                  : 'border-border/40 hover:border-primary/30 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] before:absolute before:inset-0 before:rounded-lg before:p-[1px] before:bg-gradient-to-r before:from-border/50 before:via-border/30 before:to-border/50 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:-z-10'
              } group-hover:bg-card/70`}>
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