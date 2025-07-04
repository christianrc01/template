import type {
  AccountInfo as MSALAccountInfo,
  TenantProfile,
} from "@azure/msal-browser";

export type SerializableAccountInfo = Omit<
  MSALAccountInfo,
  "tenantProfiles"
> & {
  tenantProfiles?: Record<string, TenantProfile>;
};

export interface AuthState {
  token: string | null;
  account: SerializableAccountInfo | null;
  loading: boolean;
  error: Error | null;
}
