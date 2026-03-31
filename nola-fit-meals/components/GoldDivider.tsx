interface GoldDividerProps {
  label?: string;
}

export default function GoldDivider({ label }: GoldDividerProps) {
  if (!label) {
    return <hr className="border-0 border-t border-brand-gold/30 my-8" />;
  }

  return (
    <div className="flex items-center gap-4 my-10">
      <div className="flex-1 h-px bg-brand-gold/30" />
      <span className="font-bebas text-brand-gold tracking-[0.05em] text-sm uppercase px-2 whitespace-nowrap">
        {label}
      </span>
      <div className="flex-1 h-px bg-brand-gold/30" />
    </div>
  );
}
