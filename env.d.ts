declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_APP_URL?: string;
    NEXT_PUBLIC_ACCOUNTS_URL?: string;
    NEXT_PUBLIC_GITHUB_REPOSITORY?: string;
    ELIXPO_AUTH_ISSUER?: string;
    ELIXPO_AUTH_CLIENT_ID?: string;
    ELIXPO_AUTH_CLIENT_SECRET?: string;
    DATABASE_URL?: string;
    GITHUB_APP_ID?: string;
    GITHUB_APP_PRIVATE_KEY?: string;
    GITHUB_WEBHOOK_SECRET?: string;
  }
}

export {};
