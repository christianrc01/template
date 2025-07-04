import { useEffect, useMemo } from "react";
import type { AccessiBeProps } from "@/shared/types/IShared";

const DEFAULT_CONFIG = {
  language: "es",
  position: "right" as const,
  triggerIcon: "people",
  triggerColor: "#146FF8",
  leadColor: "#146FF8",
  triggerSize: "bottom" as const,
  triggerOffsetX: 20,
  triggerOffsetY: 20,
  triggerRadius: "50%",
};

function AccessiBe({ config = {} }: AccessiBeProps) {
  const mergedConfig = useMemo(
    () => ({ ...DEFAULT_CONFIG, ...config }),
    [config]
  );

  useEffect(() => {
    if (import.meta.env.MODE !== "production") return;

    const script = document.createElement("script");
    script.src = `https://acsbap.com/api/script.js?key=${
      import.meta.env.VITE_ACCESSI_BE_API_KEY
    }`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.acsbJS?.init(mergedConfig);
    };

    return () => {
      document.head.removeChild(script);
    };
  }, [mergedConfig]);

  return null;
}

export default AccessiBe;
