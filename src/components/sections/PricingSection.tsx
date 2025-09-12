import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const pricingPlans = [
  {
    name: "Workflow Templates",
    features: [
      "Ready-to-use workflows",
      "Quick setup", 
      "Instant automation"
    ],
    popular: false
  },
  {
    name: "Custom Workflows",
    features: [
      "Tailored to your processes",
      "Scalable solutions",
      "Priority support"
    ],
    popular: true
  },
  {
    name: "Full AI Agent Suite",
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
    <section className="py-24 px-8 bg-gradient-subtle">
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
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <div className="flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </motion.div>
              )}
              
              <Card className={`h-80 transition-all duration-300 hover:shadow-elegant border-border/50 hover:border-primary/20 ${
                plan.popular ? 'border-primary/30 shadow-glow' : ''
              }`}>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-semibold mb-2">
                    {plan.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
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