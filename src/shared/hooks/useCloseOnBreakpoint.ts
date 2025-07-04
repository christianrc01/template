import { useEffect } from "react";

function useCloseOnBreakpoint(
  setIsMenuOpen: (open: boolean) => void,
  minWidth = 640
) {
  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${minWidth}px)`);

    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setIsMenuOpen(false);
    };

    if (mediaQuery.matches) setIsMenuOpen(false);

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [minWidth, setIsMenuOpen]);
}

export default useCloseOnBreakpoint;
