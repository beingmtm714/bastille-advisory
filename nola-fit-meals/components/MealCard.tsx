import Image from "next/image";
import type { Meal } from "@/types/meal";

interface MealCardProps {
  meal: Meal;
}

function MacroPill({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="bg-brand-badge rounded px-2.5 py-1.5 text-center min-w-[52px]">
      <div className="font-inter text-brand-white text-sm font-semibold leading-tight">
        {value}g
      </div>
      <div className="font-inter text-brand-muted text-[9px] uppercase tracking-wider leading-tight mt-0.5">
        {label}
      </div>
    </div>
  );
}

export default function MealCard({ meal }: MealCardProps) {
  return (
    <article className="bg-brand-card gold-border rounded-lg shadow-card hover:shadow-card-hover hover:border-brand-gold/60 transition-all duration-200 overflow-hidden flex flex-col sm:flex-row">
      {/* Photo */}
      {meal.photoUrl ? (
        <div className="relative w-full sm:w-40 h-44 sm:h-auto flex-shrink-0">
          <Image
            src={meal.photoUrl}
            alt={meal.name}
            fill
            sizes="(max-width: 640px) 100vw, 160px"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="w-full sm:w-40 h-32 sm:h-auto flex-shrink-0 bg-brand-badge flex items-center justify-center">
          <span className="font-bebas text-brand-gold/30 text-4xl tracking-widest">
            NFM
          </span>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 p-4 relative">
        {/* Calorie badge — top right */}
        <div className="absolute top-3 right-3 bg-brand-gold text-brand-black font-bebas text-xs px-2 py-0.5 rounded tracking-[0.05em]">
          {meal.calories} CAL
        </div>

        {/* Meal name */}
        <h3 className="font-bebas text-brand-gold text-xl tracking-[0.05em] uppercase leading-tight pr-20 mb-1">
          {meal.name}
        </h3>

        {/* Price */}
        <p className="font-inter text-brand-gold-light text-sm font-medium mb-2">
          ${meal.price.toFixed(2)}
        </p>

        {/* Description */}
        <p className="font-inter text-brand-white text-sm leading-relaxed mb-4">
          {meal.description}
        </p>

        {/* Macro pills */}
        <div className="flex items-center gap-2 flex-wrap">
          <MacroPill value={meal.protein} label="Protein" />
          <MacroPill value={meal.carbs} label="Carbs" />
          <MacroPill value={meal.fat} label="Fat" />
        </div>
      </div>
    </article>
  );
}
