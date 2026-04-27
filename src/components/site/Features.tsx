import { Workflow, Zap, GitBranch, Shield, LineChart, Users } from "lucide-react";

const features = [
  { icon: Workflow, title: "Streamlined issues", desc: "Capture, organize, and triage work with keyboard-first speed." },
  { icon: Zap, title: "Built for speed", desc: "Instant sync across all clients. No spinners, no waiting." },
  { icon: GitBranch, title: "Git integration", desc: "Connect PRs and branches automatically to your work." },
  { icon: LineChart, title: "Roadmaps", desc: "Plan quarters and visualize progress across teams." },
  { icon: Users, title: "Team collaboration", desc: "Comments, mentions, and shared views built in." },
  { icon: Shield, title: "Enterprise-grade", desc: "SOC 2 Type II, SSO, and granular permissions." },
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 md:py-32">
      <div className="max-w-2xl mb-16">
        <p className="text-sm font-medium text-muted-foreground mb-3">Features</p>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Everything you need to ship faster
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          A focused set of tools that help teams stay aligned and move with purpose.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
        {features.map((f) => (
          <div key={f.title} className="bg-card p-8 transition-smooth hover:bg-secondary/50">
            <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center mb-5">
              <f.icon className="h-5 w-5 text-foreground" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};