import { useMemo } from 'react'

import './HashBlock.scss'
import SwapIcon from "../../assets/swap.svg"

interface HashBlockProps {
	results: {
		lastHash: string;
		userWin: boolean;
	}
}

const HashBlock = ({ results }: HashBlockProps) => {
	const { lastHash, userWin } = results

	const isUserWin = useMemo((): string => {
		if (userWin) {
			return 'hash-block__address--green'
		}
		else {
			return 'hash-block__address--red'
		}
	}, [userWin])

	return (
		<header>
			<div className="hash-block__container">
				<div className="hash-block">
					<span className="hash-block__title">
						Target address
					</span>

					<p className="hash-block__address">
						{ import.meta.env.VITE_BITCOIN_ADDRESS }
					</p>
				</div>

				<div className="hash-line__container">
					<span className="hash-line"></span>

					<SwapIcon className="swap-icon" />

					<span className="hash-line"></span>
				</div>

				<div className="hash-block hash-block--bottom">
					<p className={`hash-block__address ${isUserWin}`}>
						{ lastHash }
					</p>
				</div>
			</div>

			<p className="hash-description">
				The found key will come in the bot&apos;s message
			</p>
		</header>
	)
}

export default HashBlock