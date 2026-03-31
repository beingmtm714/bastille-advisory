"use client";

import Link from "next/link";

export default function StickyOrderButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden px-4 pb-4 pt-2"
         style={{ background: "linear-gradient(to top, #141414 60%, transparent)" }}>
      <Link
        href="/order"
        className="block w-full text-center bg-brand-gold text-brand-black font-bebas text-xl tracking-[0.05em] uppercase py-4 rounded-md hover:bg-brand-gold-light transition-colors shadow-[0_-4px_20px_rgba(201,160,48,0.2)]"
      >
        Order Now — Closes Sunday 8pm
      </Link>
    </div>
  );
}
