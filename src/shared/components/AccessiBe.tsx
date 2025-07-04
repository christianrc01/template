import { useEffect } from "react";

function AccessiBe() {
  useEffect(() => {
    if (import.meta.env.MODE !== "production") return;
    const script = document.createElement("script");
    script.src = "https://acsbapp.com/apps/app/dist/js/app.js";
    script.async = true;
    script.onload = () => {
      window.acsbJS?.init({
        language: "es",
        position: "right",
        triggerIcon: "people",
        triggerColor: "#146FF8",
        leadColor: "#146FF8",
        triggerSize: "bottom",
        triggerOffsetX: 20,
        triggerOffsetY: 20,
        triggerRadius: "50%",
      });
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}

export default AccessiBe;
