export default interface TokenResponse {
  access_token?: string;
  expires_in?: number;
  prompt?: string;
  scope?: string;
  token_type?: string;
}

export interface ProfileResponse {
  email?: string;
  family_name?: string;
  given_name?: string;
  id?: string;
  name?: string;
  picture?: string;
  verified_email?: boolean;
}
