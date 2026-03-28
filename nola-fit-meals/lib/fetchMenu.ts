import type { Meal } from "@/types/meal";

/**
 * Fetches and parses the menu from a public Google Sheets CSV export URL.
 *
 * Expected sheet columns (row 1 = header):
 *   Meal Name | Description | Protein (g) | Carbs (g) | Fat (g) |
 *   Calories  | Price       | Category    | Photo URL | Available
 *
 * Returns only rows where Available === "YES" (case-insensitive).
 */
export async function fetchMenu(): Promise<Meal[]> {
  const url = process.env.NEXT_PUBLIC_MENU_SHEET_URL;

  if (!url) {
    console.warn("NEXT_PUBLIC_MENU_SHEET_URL is not set — returning demo menu.");
    return DEMO_MEALS;
  }

  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      console.error(`Menu fetch failed: ${res.status} ${res.statusText}`);
      return DEMO_MEALS;
    }

    const text = await res.text();
    const rows = parseCSV(text);

    if (rows.length < 2) return DEMO_MEALS;

    // First row is headers — map header names to column indices
    const headers = rows[0].map((h) => h.trim().toLowerCase());
    const col = (name: string) => headers.indexOf(name);

    const iMealName    = col("meal name");
    const iDescription = col("description");
    const iProtein     = col("protein (g)");
    const iCarbs       = col("carbs (g)");
    const iFat         = col("fat (g)");
    const iCalories    = col("calories");
    const iPrice       = col("price");
    const iCategory    = col("category");
    const iPhoto       = col("photo url");
    const iAvailable   = col("available");

    const meals: Meal[] = [];

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      if (!row || row.every((cell) => cell.trim() === "")) continue;

      const available = (row[iAvailable] ?? "").trim().toUpperCase();
      if (available !== "YES") continue;

      meals.push({
        name:        (row[iMealName]    ?? "").trim(),
        description: (row[iDescription] ?? "").trim(),
        protein:     parseFloat(row[iProtein]  ?? "0") || 0,
        carbs:       parseFloat(row[iCarbs]    ?? "0") || 0,
        fat:         parseFloat(row[iFat]      ?? "0") || 0,
        calories:    parseFloat(row[iCalories] ?? "0") || 0,
        price:       parseFloat(row[iPrice]    ?? "0") || 0,
        category:    (row[iCategory] ?? "Plates").trim(),
        photoUrl:    (row[iPhoto]    ?? "").trim(),
        available:   true,
      });
    }

    return meals.length > 0 ? meals : DEMO_MEALS;
  } catch (err) {
    console.error("Error fetching menu:", err);
    return DEMO_MEALS;
  }
}

// ---------------------------------------------------------------------------
// Minimal CSV parser (handles quoted fields with commas/newlines)
// ---------------------------------------------------------------------------
function parseCSV(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (ch === '"' && next === '"') {
        field += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        field += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ",") {
        row.push(field);
        field = "";
      } else if (ch === "\n" || (ch === "\r" && next === "\n")) {
        if (ch === "\r") i++;
        row.push(field);
        field = "";
        rows.push(row);
        row = [];
      } else {
        field += ch;
      }
    }
  }

  if (field || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  return rows;
}

// ---------------------------------------------------------------------------
// Demo meals — shown when the env var is not yet configured
// ---------------------------------------------------------------------------
const DEMO_MEALS: Meal[] = [
  {
    name: "Garlic Parmesan Chicken",
    description:
      "Tender baked chicken breast coated in a savory garlic parmesan crust, served with roasted broccoli and brown rice.",
    protein: 48,
    carbs: 38,
    fat: 14,
    calories: 482,
    price: 13,
    category: "Plates",
    photoUrl: "",
    available: true,
  },
  {
    name: "Cajun Shrimp & Grits",
    description:
      "Gulf shrimp sautéed in a smoky Cajun butter sauce over creamy stone-ground grits. Pure New Orleans on a plate.",
    protein: 36,
    carbs: 44,
    fat: 16,
    calories: 464,
    price: 15,
    category: "Plates",
    photoUrl: "",
    available: true,
  },
  {
    name: "Turkey & Sweet Potato Bowl",
    description:
      "Seasoned ground turkey with roasted sweet potato cubes, black beans, and a drizzle of cilantro lime sauce.",
    protein: 42,
    carbs: 52,
    fat: 10,
    calories: 466,
    price: 12,
    category: "Bowls",
    photoUrl: "",
    available: true,
  },
  {
    name: "Steak Burrito",
    description:
      "Grilled sirloin, cilantro rice, black beans, pico de gallo, and a chipotle crema wrapped tight in a whole-wheat tortilla.",
    protein: 44,
    carbs: 56,
    fat: 18,
    calories: 558,
    price: 14,
    category: "Burritos & Wraps",
    photoUrl: "",
    available: true,
  },
  {
    name: "Lemon Herb Salmon",
    description:
      "Wild-caught salmon fillet with lemon herb marinade, served with asparagus and quinoa.",
    protein: 46,
    carbs: 34,
    fat: 20,
    calories: 496,
    price: 16,
    category: "Plates",
    photoUrl: "",
    available: true,
  },
  {
    name: "Chicken Caesar Wrap",
    description:
      "Grilled chicken, romaine, shaved parmesan, and light Caesar dressing in a spinach tortilla.",
    protein: 38,
    carbs: 32,
    fat: 12,
    calories: 392,
    price: 12,
    category: "Burritos & Wraps",
    photoUrl: "",
    available: true,
  },
];
