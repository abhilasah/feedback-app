/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

/**
 * You can refer the environment specific documentation
 * https://vitejs.dev/guide/env-and-mode.html#env-variables-and-modes
 */
