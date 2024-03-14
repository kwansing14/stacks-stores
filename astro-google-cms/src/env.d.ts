/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly GOOGLE_SHEET_API_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
