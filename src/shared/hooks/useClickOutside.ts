import { useEffect } from "react";
import type { UseClickOutsideParams } from "@/shared/types/IShared";

function useClickOutside({ refs, handler }: UseClickOutsideParams) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (refs.some((ref) => ref.current?.contains(event.target as Node))) {
        return;
      }
      handler();
    };

    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [refs, handler]);
}

export default useClickOutside;
