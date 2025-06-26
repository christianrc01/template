import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "../utils/authConfig";

const msalInstance = new PublicClientApplication(msalConfig);
export default msalInstance;
