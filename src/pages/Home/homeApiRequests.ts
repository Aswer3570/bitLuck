import io from 'socket.io-client'

export const socket = io(import.meta.env.VITE_BACKEND_URL_ADDRESS)

export const connectionServer = (): (() => void) => {
	socket.connect()

	// Обработчик успешного подключения
	socket.on('connect', () => {
		console.log('Socket connected')
	})

	socket.on('connect_error', (error:Error) => handleConnectError(error))

	return () => {
		socket.off('connect_error', (error: Error) => handleConnectError(error))
		socket.disconnect()
	}
}

// Вывод ошибки подключения Сокета
const handleConnectError = (error: Error):void => {
	console.error(`Socket connection error: ${ error }`)
}