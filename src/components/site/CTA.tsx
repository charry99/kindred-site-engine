import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="container py-24 md:py-32">
      <div className="rounded-2xl bg-primary text-primary-foreground p-12 md:p-20 text-center shadow-elegant">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl mx-auto">
          Ready to streamline your workflow?
        </h2>
        <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
          Join thousands of teams already shipping faster with Linear.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button size="lg" variant="secondary" className="gap-2">
            Start for free <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};