import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getTitleByPath } from "../../../app/routes";

function DocumentTitle() {
  const location = useLocation();

  useEffect(() => {
    document.title = getTitleByPath(location.pathname);
  }, [location.pathname]);

  return null;
}

export default DocumentTitle;
