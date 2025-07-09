import type { IconCardProps } from "@/shared/types/IShared";

function IconCard({ icon, name }: IconCardProps) {
  return (
    <div className="flex items-center gap-4 bg-[var(--color-bg)] rounded-lg p-4 shadow-sm">
      <div className="w-6 h-6 text-[var(--color-blue-60)]">{icon}</div>
      <span className="text-[var(--color-text-primary)] font-medium">
        {name}
      </span>
    </div>
  );
}

export default IconCard;
