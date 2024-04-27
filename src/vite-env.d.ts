declare module '*.svg' {
	import * as React from 'react'
	const ReactComponent: React.FunctionComponent<React.ComponentProps<'svg'> & { title?: string }>
	export default ReactComponent
}

/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_BITCOIN_ADDRESS: string,
	readonly VITE_BACKEND_URL_ADDRESS: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}