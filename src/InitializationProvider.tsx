import { useWebApp } from '@vkruglikov/react-telegram-web-app'

import NoSupport from './pages/NoSupport/NoSupport'
import Error from './pages/Error/Error'

const InitializationProvider = ({ children }: {children: any}) => {
	const webApp = useWebApp()
	if (webApp) {
		webApp.ready()
	}

	if (webApp === null) {
		return <Error />
	}

	// unknown и macos - удалить потом
	if (webApp?.platform !== 'ios' && webApp.platform !== 'android' && webApp.platform !== 'unknown') {
		return (
			<NoSupport />
		)
	}

	const telegramIdFromUrl = new URLSearchParams(window.location.search).get('id')
	if (telegramIdFromUrl !== null) {
		localStorage.setItem('Id', telegramIdFromUrl)
	}

	return (
		<>
			{ children }
		</>
	)
}

export default InitializationProvider