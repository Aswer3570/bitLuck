import { useWebApp, useExpand } from '@vkruglikov/react-telegram-web-app'

import NoSupport from './pages/NoSupport/NoSupport'
import Error from './pages/Error/Error'

const InitializationProvider = ({ children }: {children: any}) => {
	const webApp = useWebApp()
	const [isExpanded, expand] = useExpand()
	let platform: string

	if (webApp) {
		webApp.ready()
		platform = webApp.platform

		if (!isExpanded) {
			expand()
		}

		if (webApp.initDataUnsafe.user?.id === undefined) {
			return <Error error="Не удалось получить Telegram user id" />
		}
	}
	else {
		return <Error error="Не удалось инициализировать доступ к api Telegram" />
	}

	// unknown и macos - удалить потом
	if (platform !== 'ios' && platform !== 'android' && platform !== 'unknown' && platform !== 'macos') {
		return (
			<NoSupport />
		)
	}

	return (
		<>
			{ children }
		</>
	)
}

export default InitializationProvider