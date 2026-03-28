"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/order", label: "Order" },
  { href: "/faq", label: "FAQ" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-brand-black border-b border-brand-gold/20 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="border border-brand-gold/40 rounded-full px-4 py-1.5 group-hover:border-brand-gold/70 transition-colors">
              <div className="font-bebas text-brand-gold text-xl leading-tight tracking-[0.05em]">
                NOLA FIT MEALS
              </div>
              <div className="font-inter text-brand-muted text-[9px] uppercase tracking-widest2 leading-tight -mt-0.5">
                Meal Prep Service
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-inter text-sm uppercase tracking-wider transition-colors ${
                  pathname === link.href
                    ? "text-brand-gold"
                    : "text-brand-muted hover:text-brand-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/order"
              className="ml-2 bg-brand-gold text-brand-black font-bebas text-base tracking-[0.05em] uppercase px-5 py-2 rounded-md hover:bg-brand-gold-light transition-colors"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-brand-white p-2 focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-brand-gold mb-1.5 transition-transform duration-200 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-brand-gold mb-1.5 transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-brand-gold transition-transform duration-200 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-brand-gold/20 bg-brand-black px-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block py-3 font-inter text-sm uppercase tracking-wider border-b border-brand-gold/10 transition-colors ${
                pathname === link.href
                  ? "text-brand-gold"
                  : "text-brand-muted hover:text-brand-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/order"
            onClick={() => setOpen(false)}
            className="mt-4 block w-full text-center bg-brand-gold text-brand-black font-bebas text-lg tracking-[0.05em] uppercase px-5 py-3 rounded-md hover:bg-brand-gold-light transition-colors"
          >
            Order Now
          </Link>
        </div>
      )}
    </nav>
  );
}
