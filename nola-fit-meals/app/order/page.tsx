import GoldDivider from "@/components/GoldDivider";
import TallyEmbed from "./TallyEmbed";

export default function OrderPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-20 pt-10">
      {/* Page header */}
      <div className="text-center mb-8">
        <h1
          className="font-bebas text-brand-gold tracking-[0.05em] uppercase leading-none text-shadow-gold"
          style={{ fontSize: "clamp(2.5rem, 10vw, 5rem)" }}
        >
          Place Your Order
        </h1>
        <p className="font-inter text-brand-muted text-sm mt-2 uppercase tracking-wider">
          Submit by Sunday · 8pm · Pickup or Delivery Monday
        </p>
      </div>

      <GoldDivider />

      {/* Order cutoff notice */}
      <div className="flex items-start gap-3 mb-8 px-4 py-3 rounded-lg bg-brand-badge border border-brand-gold/20">
        <span className="text-brand-gold mt-0.5 shrink-0">⏰</span>
        <p className="font-inter text-brand-muted text-sm leading-relaxed">
          Orders close every{" "}
          <span className="text-brand-white font-medium">Sunday at 8:00pm</span>.
          Late orders cannot be accommodated. Not sure what to order? Check out{" "}
          <a href="/menu" className="text-brand-gold underline underline-offset-2 hover:text-brand-gold-light">
            this week's menu
          </a>{" "}
          first.
        </p>
      </div>

      {/* Tally form embed */}
      <TallyEmbed />

      <GoldDivider />

      {/* Payment callout box */}
      <div className="rounded-lg border border-brand-gold bg-brand-gold/10 px-6 py-5 mt-2">
        <h2 className="font-bebas text-brand-gold text-xl tracking-[0.05em] uppercase mb-2">
          Payment Instructions
        </h2>
        <p className="font-inter text-brand-white text-sm leading-relaxed">
          After submitting your order form, please send payment via{" "}
          <span className="text-brand-gold font-semibold">Venmo @nolafitmeals</span>.
        </p>
        <ul className="mt-3 space-y-1">
          {[
            "Include your full name in the Venmo note",
            'Add "Week of [Monday date]" so we can match your order',
            "Payment confirms your order — no payment = no order",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 font-inter text-sm text-brand-muted">
              <span className="text-brand-gold mt-0.5 shrink-0">›</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Fine print */}
      <p className="font-inter text-brand-muted text-xs text-center mt-6 leading-relaxed">
        Questions? DM us on Instagram{" "}
        <a
          href="https://instagram.com/nola_fitmeals"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-gold hover:text-brand-gold-light"
        >
          @nola_fitmeals
        </a>
      </p>
    </div>
  );
}
