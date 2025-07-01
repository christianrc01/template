import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "../controllers/authConfig";

const msalInstance = new PublicClientApplication(msalConfig);
export default msalInstance;
