// ─────────────────────────────────────────────────────────────────────────────
// OWNER INSTRUCTIONS:
// To update pickup location, delivery area, fees, or order cutoff time,
// edit the "answer" text in the array below.
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
