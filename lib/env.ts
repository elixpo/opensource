type PublicEnvironment = {
  appUrl: string;
  accountsUrl: string;
  githubRepository: string;
};

function validUrl(name: string, value: string): string {
  try {
    return new URL(value).toString().replace(/\/$/, '');
  } catch {
    throw new Error(`${name} must be a valid absolute URL`);
  }
}

export const publicEnv: PublicEnvironment = {
  appUrl: validUrl(
    'NEXT_PUBLIC_APP_URL',
    process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
  ),
  accountsUrl: validUrl(
    'NEXT_PUBLIC_ACCOUNTS_URL',
    process.env.NEXT_PUBLIC_ACCOUNTS_URL ?? 'https://accounts.elixpo.com',
  ),
  githubRepository: validUrl(
    'NEXT_PUBLIC_GITHUB_REPOSITORY',
    process.env.NEXT_PUBLIC_GITHUB_REPOSITORY ??
      'https://github.com/elixpo/opensource',
  ),
};

export function requireServerEnv(name: keyof NodeJS.ProcessEnv): string {
  const value = process.env[name];

  if (!value || value === 'replace-me') {
    throw new Error(`Missing required server environment variable: ${name}`);
  }

  return value;
}
