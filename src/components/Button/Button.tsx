import './Button.scss'

const Button = ({ onClick, userWin }: { onClick: () => void, userWin: boolean }) => {
	return (
		<section className="button-container">
			<button
				className={`button ${ userWin ? 'button--disabled' : '' }`}
				onClick={onClick}
				disabled={userWin}
			>
				<div className="button-title">
					₿
				</div>
			</button>
		</section>
	)
}

export default Button