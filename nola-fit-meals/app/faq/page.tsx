import GoldDivider from "@/components/GoldDivider";
import FaqAccordion from "./FaqAccordion";

// ─────────────────────────────────────────────────────────────────────────────
// OWNER INSTRUCTIONS:
// To update pickup location, delivery area, fees, or order cutoff time,
// edit the "answer" text in the FAQs array below.
// Each entry has a "question" and an "answer". Just change the answer text.
// ─────────────────────────────────────────────────────────────────────────────

export const faqs = [
  {
    question: "When is the order cutoff?",
    // ↓ OWNER: Change the day/time here if your cutoff changes
    answer:
      "Orders close every Sunday at 8:00pm. We cannot accommodate late orders because we shop and prep early Monday morning. Set a reminder — it fills up fast!",
  },
  {
    question: "Where do I pick up my order?",
    // ↓ OWNER: Add your pickup address/location details here
    answer:
      "📍 [OWNER: ADD YOUR PICKUP ADDRESS HERE — e.g., '1234 Airline Dr, Metairie, LA 70001. Pull up to the front door and text when you arrive.']\n\nPickup window is Monday between [ADD HOURS, e.g. 11am – 2pm].",
  },
  {
    question: "Do you offer delivery? What's the fee?",
    // ↓ OWNER: Update delivery area and fee here
    answer:
      "Yes! We deliver within [OWNER: ADD YOUR DELIVERY AREA — e.g., 'the Metairie and New Orleans metro area']. Delivery fee is $[OWNER: ADD FEE — e.g., '$5'] and is added to your Venmo payment. If you're unsure whether we deliver to you, DM us on Instagram.",
  },
  {
    question: "How do I pay?",
    answer:
      "We accept payment via Venmo @nolafitmeals only. Send payment after submitting your order form. Include your name and 'Week of [Monday date]' in the note. Your order is not confirmed until payment is received.",
  },
  {
    question: "How do I reheat my meals?",
    answer:
      "Remove the lid and microwave on high for 2–3 minutes, or until steaming throughout. For best texture, transfer to a skillet over medium heat for 3–4 minutes. All containers are microwave-safe.",
  },
  {
    question: "How long do the meals stay fresh?",
    answer:
      "Meals are prepared fresh every Monday and stay good refrigerated for 5–6 days (through Saturday). For longer storage, freeze within 24 hours of pickup/delivery — they'll keep for up to 3 months.",
  },
  {
    question: "Do you accommodate allergies or dietary restrictions?",
    answer:
      "⚠️ Allergen Disclaimer: Our meals are prepared in a shared kitchen and may contain or come into contact with common allergens including gluten, dairy, eggs, soy, tree nuts, and shellfish. We cannot guarantee any meal is free of a specific allergen. If you have a severe allergy, please consult your doctor before ordering. DM us on Instagram with questions about specific ingredients.",
  },
  {
    question: "Can I customize a meal?",
    answer:
      "Minor substitutions (e.g., swap a side) can be requested in the 'Special Instructions' field of the order form. We'll do our best to accommodate, but custom requests are not guaranteed. We cannot make major changes to a dish's protein or sauce.",
  },
  {
    question: "How do I know what's on the menu each week?",
    answer:
      "The menu on this site updates every Monday — just refresh the Menu page. We also post every week on Instagram (@nola_fitmeals), so follow us there for the fastest preview.",
  },
];

export default function FaqPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-20 pt-10">
      {/* Page header */}
      <div className="text-center mb-8">
        <h1
          className="font-bebas text-brand-gold tracking-[0.05em] uppercase leading-none text-shadow-gold"
          style={{ fontSize: "clamp(2.5rem, 10vw, 5rem)" }}
        >
          FAQ
        </h1>
        <p className="font-inter text-brand-muted text-sm mt-2 uppercase tracking-wider">
          Frequently Asked Questions
        </p>
      </div>

      <GoldDivider />

      <FaqAccordion faqs={faqs} />

      <GoldDivider label="Still have questions?" />

      <div className="text-center">
        <p className="font-inter text-brand-muted text-sm mb-4">
          DM us on Instagram — we typically respond within a few hours.
        </p>
        <a
          href="https://instagram.com/nola_fitmeals"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand-gold text-brand-black font-bebas text-base tracking-[0.05em] uppercase px-6 py-3 rounded-md hover:bg-brand-gold-light transition-colors"
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
      </div>
    </div>
  );
}
