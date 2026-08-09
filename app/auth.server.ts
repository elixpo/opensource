// Mock session handler for local development.
// In production, this would validate JWTs from accounts.elixpo.com SSO.

export interface SessionUser {
  id: string;
  username: string;
  level: string;
  points: number;
}

const MOCK_SESSION_USER: SessionUser = {
  id: 'u1',
  username: 'karan_dev',
  level: 'Maintainer',
  points: 1450,
};

export function getUserSession(_request: Request): SessionUser | null {
  // In production: parse cookie/JWT from request, validate against accounts.elixpo.com
  // For local dev: always return the mock user
  return MOCK_SESSION_USER;
}

export function requireUser(request: Request): SessionUser {
  const user = getUserSession(request);
  if (!user) {
    throw new Response('Unauthorized', { status: 401 });
  }
  return user;
}
