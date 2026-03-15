export interface JwtPayload {
  sub: string;
  store_id: string;
  staff_id: string;
  is_owner: boolean;
  iat?: number;
  exp?: number;
}
