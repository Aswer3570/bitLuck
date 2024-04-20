import React from 'react'

interface CanvasProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
	className?: string
}

const Canvas = React.forwardRef<HTMLCanvasElement, CanvasProps>((props, ref) => {
	return (
		<canvas ref={ref} {...props}/>
	)
})

export default Canvas