import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "$0",
    desc: "For small teams getting started.",
    features: ["Up to 10 users", "Unlimited issues", "Basic integrations", "Community support"],
    cta: "Start free",
    highlighted: false,
  },
  {
    name: "Standard",
    price: "$8",
    desc: "For growing teams that need more.",
    features: ["Unlimited users", "Roadmaps & cycles", "Advanced integrations", "Priority support"],
    cta: "Start trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For organizations with advanced needs.",
    features: ["SSO & SCIM", "Audit logs", "Custom contracts", "Dedicated CSM"],
    cta: "Contact sales",
    highlighted: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="bg-secondary/30 border-y border-border">
      <div className="container py-24 md:py-32">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground mb-3">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Simple pricing that scales
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Start free. Upgrade when your team is ready.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-xl border p-8 bg-card transition-smooth ${
                t.highlighted
                  ? "border-foreground shadow-elegant"
                  : "border-border shadow-soft"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-lg">{t.name}</h3>
                {t.highlighted && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary text-primary-foreground">
                    Popular
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-6">{t.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-semibold tracking-tight">{t.price}</span>
                {t.price !== "Custom" && (
                  <span className="text-muted-foreground text-sm"> / user / month</span>
                )}
              </div>
              <Button
                className="w-full mb-6"
                variant={t.highlighted ? "default" : "outline"}
              >
                {t.cta}
              </Button>
              <ul className="space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="h-4 w-4 mt-0.5 text-foreground shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};