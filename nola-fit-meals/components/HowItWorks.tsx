import GoldDivider from "./GoldDivider";

const steps = [
  {
    number: "01",
    title: "Browse the Weekly Menu",
    description:
      "Check out this week's freshly prepared meals — new options drop every Monday.",
  },
  {
    number: "02",
    title: "Submit Your Order by Sunday 8pm",
    description:
      "Fill out the quick order form with your meal selections and delivery or pickup preference.",
  },
  {
    number: "03",
    title: "Pickup or Delivery on Monday",
    description:
      "Your meals arrive fresh, portioned, and ready to heat. No cooking, no stress.",
  },
];

export default function HowItWorks() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <GoldDivider label="How It Works" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center text-center">
            {/* Gold numbered circle */}
            <div className="w-16 h-16 rounded-full border-2 border-brand-gold flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(201,160,48,0.2)]">
              <span className="font-bebas text-brand-gold text-2xl tracking-[0.05em]">
                {step.number}
              </span>
            </div>

            <h3 className="font-bebas text-brand-white text-xl tracking-[0.05em] uppercase mb-2">
              {step.title}
            </h3>
            <p className="font-inter text-brand-muted text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
