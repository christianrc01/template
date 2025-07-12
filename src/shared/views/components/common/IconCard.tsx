import type { IconCardProps } from "@/shared/types/IShared";
import Text from "@/shared/views/components/common/Text";

function IconCard({ icon, name }: IconCardProps) {
  return (
    <div className="flex items-center gap-4 bg-[var(--color-bg)] rounded-lg p-4 shadow-sm">
      <div>{icon}</div>
      <Text
        as="span"
        className="text-[var(--color-text-primary)] text-sm break-all"
      >
        {name}
      </Text>
    </div>
  );
}

export default IconCard;
