/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_BASE: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
