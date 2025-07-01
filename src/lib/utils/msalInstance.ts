import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "@/lib/utils/authConfig";

const msalInstance = new PublicClientApplication(msalConfig);
export default msalInstance;
