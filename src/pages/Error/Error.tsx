interface ErrorProps {
	error: string
}

const Error = ({ error }: ErrorProps) => {
	return (
		<h1 style={{ color: '#fff' }}>
			{ error }
		</h1>
	)
}

export default Error