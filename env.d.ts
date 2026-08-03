declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_APP_URL?: string;
    NEXT_PUBLIC_ACCOUNTS_URL?: string;
    NEXT_PUBLIC_GITHUB_REPOSITORY?: string;
    NEXT_PUBLIC_ELIXPO_CLIENT_ID?: string;
    ELIXPO_CLIENT_SECRET?: string;
    GITHUB_APP_ID?: string;
    GITHUB_APP_PRIVATE_KEY?: string;
    GITHUB_WEBHOOK_SECRET?: string;
  }
}

export {};
