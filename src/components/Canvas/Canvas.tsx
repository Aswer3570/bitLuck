import React from 'react'

const Canvas = React.forwardRef<HTMLCanvasElement>((props, ref) => {
	return (
		<canvas ref={ref} {...props} className="canvas" />
	)
})

export default Canvas