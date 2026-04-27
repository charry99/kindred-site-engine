const logos = ["Acme", "Globex", "Initech", "Umbrella", "Hooli", "Pied Piper"];

export const LogoCloud = () => {
  return (
    <section className="border-y border-border bg-secondary/30">
      <div className="container py-12">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-8">
          Trusted by teams at fast-moving companies
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {logos.map((l) => (
            <div key={l} className="text-center text-lg font-semibold text-muted-foreground/70 tracking-tight">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};