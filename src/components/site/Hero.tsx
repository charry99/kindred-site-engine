import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-soft pointer-events-none" />
      <div className="container relative pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            New — AI-powered sprint planning
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
            The workflow tool for modern product teams
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Linear streamlines issues, sprints, and product roadmaps so your team can focus on what matters — building great products.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button size="lg" className="gap-2">
              Start for free <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Book a demo
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Free 14-day trial · No credit card required</p>
        </div>

        <div className="mt-16 mx-auto max-w-5xl animate-fade-up">
          <div className="rounded-xl border border-border bg-card shadow-elegant overflow-hidden">
            <img
              src={heroImage}
              alt="Linear product preview showing sprint board and roadmap"
              width={1536}
              height={1024}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};