namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    NEXT_PUBLIC_SANITY_PROJECT_ID: string;
    NEXT_PUBLIC_SANITY_API_TOKEN: string;
    NEXT_PUBLIC_ALCHEMY_URL: string;
  }
}
