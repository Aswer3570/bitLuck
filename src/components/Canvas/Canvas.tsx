import React from 'react'

interface CanvasProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
	
}

const Canvas = React.forwardRef<HTMLCanvasElement, CanvasProps>((props, ref) => {
	return (
		<canvas ref={ref} {...props} className="canvas" />
	)
})

export default Canvas