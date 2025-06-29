import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "@/shared/utils/authConfig";

const msalInstance = new PublicClientApplication(msalConfig);
export default msalInstance;
