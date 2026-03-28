import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-gold/20 mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="font-bebas text-brand-gold text-2xl tracking-[0.05em]">
              NOLA FIT MEALS
            </div>
            <div className="font-inter text-brand-muted text-xs uppercase tracking-widest2 mt-0.5">
              Meal Prep Service
            </div>
            <p className="font-inter text-brand-muted text-sm mt-3">
              Metairie, Louisiana
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="font-inter text-brand-muted text-xs uppercase tracking-wider mb-1">
              Quick Links
            </p>
            {[
              { href: "/menu", label: "This Week's Menu" },
              { href: "/order", label: "Place an Order" },
              { href: "/faq", label: "FAQ" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-inter text-sm text-brand-white hover:text-brand-gold transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Social / Payment */}
          <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
            <a
              href="https://instagram.com/nola_fitmeals"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brand-gold hover:text-brand-gold-light transition-colors font-inter text-sm"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @nola_fitmeals
            </a>
            <div className="font-inter text-brand-muted text-sm">
              Payment via{" "}
              <span className="text-brand-white font-medium">
                Venmo @nolafitmeals
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-brand-gold/10 text-center">
          <p className="font-inter text-brand-muted text-xs">
            © {new Date().getFullYear()} NOLA Fit Meals. All rights reserved.
            &nbsp;·&nbsp; Metairie, Louisiana
          </p>
        </div>
      </div>
    </footer>
  );
}
