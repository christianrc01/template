import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { appInsights } from "@/lib/utils/appInsights";

function TrackPageView() {
  const location = useLocation();

  useEffect(() => {
    appInsights.trackPageView({
      name: location.pathname,
      uri: window.location.href,
    });
  }, [location]);

  return null;
}

export default TrackPageView;
