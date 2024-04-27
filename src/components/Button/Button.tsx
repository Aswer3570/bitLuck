import './Button.scss'

const Button = ({onClick}: {onClick?: () => void}) => {
	return (
		<section className="button-container">
			<button
				className="button"
				onClick={onClick}
			>
				<div className="button-title">
					₿
				</div>
			</button>
		</section>
	)
}

export default Button