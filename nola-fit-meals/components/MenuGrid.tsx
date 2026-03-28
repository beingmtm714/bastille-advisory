import type { Meal } from "@/types/meal";
import MealCard from "./MealCard";

interface MenuGridProps {
  meals: Meal[];
}

export default function MenuGrid({ meals }: MenuGridProps) {
  // Group meals by category, preserving first-seen order
  const categoryMap = new Map<string, Meal[]>();
  for (const meal of meals) {
    const key = meal.category || "Plates";
    if (!categoryMap.has(key)) categoryMap.set(key, []);
    categoryMap.get(key)!.push(meal);
  }

  if (categoryMap.size === 0) {
    return (
      <div className="text-center py-16">
        <p className="font-inter text-brand-muted text-base">
          Menu is being updated — check back soon!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-14">
      {Array.from(categoryMap.entries()).map(([category, categoryMeals]) => (
        <section key={category}>
          {/* Category header with Pacifico decorative label */}
          <div className="flex items-center gap-4 mb-6">
            <span
              className="font-pacifico text-brand-gold text-3xl leading-none"
              style={{ transform: "rotate(-2deg)", display: "inline-block" }}
            >
              {category}
            </span>
            <div className="flex-1 h-px bg-brand-gold/20" />
            <span className="font-inter text-brand-muted text-xs uppercase tracking-wider">
              {categoryMeals.length} item{categoryMeals.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Meal cards */}
          <div className="grid grid-cols-1 gap-4">
            {categoryMeals.map((meal) => (
              <MealCard key={meal.name} meal={meal} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
