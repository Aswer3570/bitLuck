import { useRef, useEffect } from 'react'

import Canvas from '../../components/Canvas/Canvas'

const Home = () => {
	const canvasHomeRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const canvas = canvasHomeRef.current
		if (!canvas) return

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		canvas.width = 390
		canvas.height = 844


		// Рисование на холсте
		ctx.fillStyle = 'white'
		ctx.font = '10px Arial'
		ctx.fillText('Пример использования Canvas', 10, 10)

	}, [])

	return (
		<Canvas ref={canvasHomeRef} />
	)
}

export default Home