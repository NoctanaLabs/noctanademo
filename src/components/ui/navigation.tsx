import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = memo(() => {
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center space-x-1 bg-background/80 backdrop-blur-md border border-border rounded-full px-2 py-1 shadow-lg">
        {navItems.map((item) => (
          <Button
            key={item.href}
            asChild
            variant={location.pathname === item.href ? "default" : "ghost"}
            size="sm"
            className={cn(
              "rounded-full transition-all duration-200",
              location.pathname === item.href && "shadow-sm"
            )}
          >
            <Link to={item.href}>{item.label}</Link>
          </Button>
        ))}
      </div>
    </nav>
  );
});

export default Navigation;