import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, TrendingUp, DollarSign, Brain } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Automation that Never Sleeps",
    description: "Routine processes handled instantly and accurately, every time."
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "From one workflow to a full AI ecosystem—growth without limits."
  },
  {
    icon: DollarSign,
    title: "Cost Efficiency",
    description: "Slash operating expenses and put resources back where they matter most."
  },
  {
    icon: Brain,
    title: "Smarter Insights",
    description: "Turn raw data into clarity and decisions that drive results."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-8 bg-background/65 backdrop-blur-sm">{/* 35% translucent */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-4">
            The Advantage of Automation
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
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
              className="group"
            >
              <Card className="h-full transition-all duration-300 hover:shadow-elegant border-border/50 hover:border-primary/20">
                <CardHeader className="text-center pb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit"
                  >
                    <feature.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;