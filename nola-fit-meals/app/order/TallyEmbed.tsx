"use client";

import { useEffect } from "react";

export default function TallyEmbed() {
  const formId = process.env.NEXT_PUBLIC_TALLY_FORM_ID;

  // Load the Tally embed script once
  useEffect(() => {
    const existing = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
    if (existing) {
      // Script already loaded — re-trigger Tally to scan for embeds
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      }
      return;
    }

    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    script.onload = () => {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      }
    };
    document.body.appendChild(script);
  }, []);

  if (!formId) {
    // Placeholder shown until owner configures their Tally form
    return (
      <div className="rounded-lg border border-brand-gold/30 bg-brand-card p-8 text-center mb-8">
        <p className="font-bebas text-brand-gold text-xl tracking-[0.05em] uppercase mb-2">
          Order Form Coming Soon
        </p>
        <p className="font-inter text-brand-muted text-sm leading-relaxed">
          The order form will appear here once it's set up.
          <br />
          In the meantime, DM{" "}
          <a
            href="https://instagram.com/nola_fitmeals"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-gold underline underline-offset-2"
          >
            @nola_fitmeals
          </a>{" "}
          on Instagram to place your order.
        </p>
      </div>
    );
  }

  return (
    <div className="tally-iframe-wrapper mb-8 rounded-lg overflow-hidden">
      <iframe
        data-tally-src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
        loading="lazy"
        width="100%"
        height="500"
        title="NOLA Fit Meals Order Form"
        style={{ border: "none", background: "transparent" }}
      />
    </div>
  );
}
