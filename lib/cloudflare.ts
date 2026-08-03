import { getCloudflareContext } from '@opennextjs/cloudflare';

/**
 * Access Cloudflare bindings from Server Components, Server Actions, and
 * route handlers. Keep this module out of client component dependency trees.
 */
export async function getCloudflareBindings(): Promise<CloudflareEnv> {
  const { env } = await getCloudflareContext({ async: true });
  return env;
}

export async function getDatabase(): Promise<D1Database> {
  return (await getCloudflareBindings()).DB;
}

export async function getCache(): Promise<KVNamespace> {
  return (await getCloudflareBindings()).CACHE;
}

export async function getRateLimits(): Promise<KVNamespace> {
  return (await getCloudflareBindings()).RATE_LIMITS;
}
