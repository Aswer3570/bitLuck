import { useCallback, useEffect } from 'react'
import { useHapticFeedback } from '@vkruglikov/react-telegram-web-app'

import './Home.scss'
import HashBlock from '../../components/HashBlock/HashBlock'
import Button from '../../components/Button/Button'
import { socket, connectionServer } from './homeApiRequests'

const Home = () => {
	const [impactOccurred, ,] = useHapticFeedback()

	useEffect(() => {
		connectionServer()
	}, [])

	// const hashGeneration = useCallback((): void => {
	// 	impactOccurred('light')

	// 	// Отправка сообщения на сервер
	// 	socket.emit('message', {userId: userId})

	// 	// Однократный обработчик входящего сообщения от сервера
	// 	socket.once('message', (data) => {
	// 		console.log(data)
	// 	})
	// }, [])
	
	return (
		<main className="home">
			<HashBlock lastAttempt="12ib7dApVFvg82TXKycWBNpN8kFyiAN1dr" />

			<p>
				{
					window?.Telegram?.WebApp?.id
				}
			</p>

			{/* <Button onClick={() => hashGeneration} /> */}

			<Button />
		</main>
	)
}

export default Home