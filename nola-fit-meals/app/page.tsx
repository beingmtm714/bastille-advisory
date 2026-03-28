import Link from "next/link";
import HowItWorks from "@/components/HowItWorks";
import GoldDivider from "@/components/GoldDivider";

export default function HomePage() {
  return (
    <>
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-brand-black">
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(201,160,48,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Grid texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,160,48,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,160,48,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Eyebrow */}
          <p className="font-inter text-brand-muted text-xs uppercase tracking-widest2 mb-6">
            Metairie, Louisiana · Est. 2024
          </p>

          {/* Main wordmark */}
          <h1 className="font-bebas text-brand-gold leading-none tracking-[0.05em] uppercase text-shadow-gold mb-4"
              style={{ fontSize: "clamp(3.5rem, 14vw, 9rem)" }}>
            NOLA FIT MEALS
          </h1>

          {/* Gold rule */}
          <div className="w-24 h-0.5 bg-brand-gold mx-auto mb-6 opacity-60" />

          {/* Tagline */}
          <p className="font-inter text-brand-white text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Fresh, local meal prep. New menu every Monday.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/menu"
              className="w-full sm:w-auto bg-brand-gold text-brand-black font-bebas text-lg tracking-[0.05em] uppercase px-8 py-3.5 rounded-md hover:bg-brand-gold-light transition-colors text-center"
            >
              See This Week's Menu
            </Link>
            <Link
              href="#how-it-works"
              className="w-full sm:w-auto border border-brand-gold text-brand-gold font-bebas text-lg tracking-[0.05em] uppercase px-8 py-3.5 rounded-md hover:bg-brand-gold/10 transition-colors text-center"
            >
              How to Order
            </Link>
          </div>

          {/* Scroll nudge */}
          <div className="mt-16 flex flex-col items-center gap-2 opacity-40">
            <span className="font-inter text-brand-muted text-xs uppercase tracking-wider">
              scroll
            </span>
            <div className="w-px h-10 bg-brand-gold/50" />
          </div>
        </div>
      </section>

      {/* ───────────────────────── WEEKLY DROP BANNER ───────────────────────── */}
      <div className="bg-brand-gold py-3 px-4 text-center">
        <p className="font-bebas text-brand-black text-lg tracking-[0.05em] uppercase">
          New Menu Drops Every Monday &nbsp;·&nbsp; Order Closes Sunday at 8pm
        </p>
      </div>

      {/* ───────────────────────── HOW IT WORKS ───────────────────────── */}
      <div id="how-it-works">
        <HowItWorks />
      </div>

      {/* ───────────────────────── SOCIAL PROOF / CTA ───────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
        <GoldDivider label="Ready to Eat Clean?" />

        <div className="text-center mt-8">
          <p className="font-inter text-brand-muted text-base max-w-lg mx-auto mb-8">
            No subscriptions. No commitments. Just order what you want, when you
            want it — every week.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/menu"
              className="w-full sm:w-auto bg-brand-gold text-brand-black font-bebas text-lg tracking-[0.05em] uppercase px-8 py-3.5 rounded-md hover:bg-brand-gold-light transition-colors text-center"
            >
              View the Menu
            </Link>
            <Link
              href="/order"
              className="w-full sm:w-auto border border-brand-gold text-brand-gold font-bebas text-lg tracking-[0.05em] uppercase px-8 py-3.5 rounded-md hover:bg-brand-gold/10 transition-colors text-center"
            >
              Place Your Order
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────────────── INSTAGRAM STRIP ───────────────────────── */}
      <div className="border-t border-brand-gold/10 bg-brand-card/30 py-6 px-4 text-center">
        <a
          href="https://instagram.com/nola_fitmeals"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-brand-gold hover:text-brand-gold-light transition-colors"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          <span className="font-inter text-sm font-medium">
            Follow us @nola_fitmeals for menu previews
          </span>
        </a>
      </div>
    </>
  );
}
