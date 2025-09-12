import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarBorder } from "@/components/ui/star-border";
import { Bot, Workflow, BarChart, Zap, ArrowRight } from "lucide-react";
import { memo } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Bot,
    title: "AI Agents",
    description: "Intelligent agents that handle customer service, sales inquiries, and complex decision-making processes automatically.",
    features: ["24/7 Availability", "Multi-language Support", "Learning Capabilities"]
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Streamline repetitive tasks and workflows with smart automation that adapts to your business rules.",
    features: ["Document Processing", "Data Entry", "Task Routing"]
  },
  {
    icon: BarChart,
    title: "Analytics & Insights",
    description: "Get actionable insights from your data with AI-powered analytics and predictive modeling.",
    features: ["Real-time Dashboards", "Predictive Analytics", "Custom Reports"]
  }
];

const ServicesSection = memo(() => {
  return (
    <section className="py-24 px-8 bg-gradient-to-b from-background to-muted/15">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI solutions designed to transform your business operations and drive efficiency.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4"
                  >
                    <service.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center justify-center space-x-2">
                        <Zap className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="p-8 bg-primary-foreground border-2 border-primary rounded-2xl text-primary">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can streamline your operations and boost efficiency.
            </p>
            <StarBorder as={Link} to="/contact" className="group">
              Get Started Today
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </StarBorder>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default ServicesSection;