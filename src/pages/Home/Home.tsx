import { useCallback, useEffect, useState } from 'react'
import { useHapticFeedback, useWebApp } from '@vkruglikov/react-telegram-web-app'

import './Home.scss'
import HashBlock from '../../components/HashBlock/HashBlock'
import Button from '../../components/Button/Button'
import BottomMenu from '../../components/BottomMenu/BottomMenu'
import { socket, connectionServer } from './homeApiRequests'

interface DataType {
	lastHash: string
	userWin: boolean
	boost: number
}

const Home = () => {
	const webApp = useWebApp()
	const [impactOccurred, ,] = useHapticFeedback()
	const telegramUserId: string = webApp.initDataUnsafe.user?.id
	const [socketResult, setSocketResult] = useState<DataType>({
		lastHash: '',
		userWin: false,
		boost: 0
	})

	useEffect(() => {
		connectionServer()
	}, [connectionServer])

	const hashGeneration = useCallback((): void => {
		impactOccurred('light')

		// Отправка сообщения на сервер
		socket.emit('message', { userId: telegramUserId })

		// Однократный обработчик входящего сообщения от сервера
		socket.once('message', (data: DataType) => {
			setSocketResult(data)
		})
	}, [])

	// data должна вернуть массив с последним хешом и булевым значением выиграл ли игрок или нет
	// data => { lastHash: <string>, userWin: <Bool>, boost: <number> }
	
	return (
		<main className="home">
			<HashBlock results={socketResult} />

			<Button
				userWin={socketResult.userWin}
				onClick={() => hashGeneration}
			/>

			<BottomMenu boost={socketResult.boost} />
		</main>
	)
}

export default Home