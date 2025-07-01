import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import { ReactPlugin } from "@microsoft/applicationinsights-react-js";

const reactPlugin = new ReactPlugin();
const appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: import.meta.env.VITE_INSTRUMENTATION_KEY,
    extensions: [reactPlugin],
  },
});
appInsights.loadAppInsights();

export { appInsights, reactPlugin };
