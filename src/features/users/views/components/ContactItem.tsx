import type { ReactNode } from "react";

function ContactItem({ icon, text }: { icon: ReactNode; text: ReactNode }) {
  return (
    <div className="text-gray-600 dark:text-gray-400 flex items-center gap-2 min-w-0">
      {icon}
      <span className="break-words block text-sm sm:text-base leading-tight min-w-0">
        {text}
      </span>
    </div>
  );
}

export default ContactItem;
