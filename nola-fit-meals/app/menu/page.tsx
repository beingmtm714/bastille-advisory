import Link from "next/link";
import { fetchMenu } from "@/lib/fetchMenu";
import MenuGrid from "@/components/MenuGrid";
import GoldDivider from "@/components/GoldDivider";

// Always fetch fresh data — no rebuild needed when owner updates the sheet
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function MenuPage() {
  const meals = await fetchMenu();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-32 pt-10">
      {/* Page header */}
      <div className="text-center mb-10">
        <h1 className="font-bebas text-brand-gold tracking-[0.05em] uppercase leading-none text-shadow-gold"
            style={{ fontSize: "clamp(2.5rem, 10vw, 5rem)" }}>
          This Week's Menu
        </h1>
        <p className="font-inter text-brand-muted text-sm mt-2 uppercase tracking-wider">
          Fresh · Local · Weekly
        </p>
      </div>

      <GoldDivider />

      {/* Order notice */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-8 px-4 py-3 rounded-lg bg-brand-badge border border-brand-gold/20">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse inline-block" />
          <p className="font-inter text-brand-white text-sm">
            <span className="text-brand-gold font-medium">Order closes Sunday at 8pm.</span>
            {" "}Pickup &amp; delivery Monday.
          </p>
        </div>
        <Link
          href="/order"
          className="shrink-0 bg-brand-gold text-brand-black font-bebas text-sm tracking-[0.05em] uppercase px-4 py-2 rounded-md hover:bg-brand-gold-light transition-colors"
        >
          Order Now
        </Link>
      </div>

      {/* Menu grid grouped by category */}
      <MenuGrid meals={meals} />

      <GoldDivider />

      {/* Bottom CTA bar — matches IG post style */}
      <div className="mt-4 bg-brand-gold rounded-lg px-6 py-5 text-center">
        <p className="font-bebas text-brand-black text-2xl tracking-[0.05em] uppercase leading-tight">
          Limited Weekly Drop
        </p>
        <p className="font-inter text-brand-black/80 text-sm mt-1 mb-4">
          Meals sell out fast — secure yours before Sunday 8pm.
        </p>
        <Link
          href="/order"
          className="inline-block bg-brand-black text-brand-gold font-bebas text-base tracking-[0.05em] uppercase px-8 py-3 rounded-md hover:bg-brand-card transition-colors"
        >
          Place Your Order
        </Link>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Sticky "Order Now" button — rendered via a client wrapper in the layout.
// We inject it here as a fixed footer so it only shows on the menu page.
// ─────────────────────────────────────────────────────────────────────────────
