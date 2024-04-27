import { useMemo } from 'react'

import './HashBlock.scss'
import SwapIcon from "../../assets/swap.svg"

const HashBlock = ({ lastAttempt }: {lastAttempt: string}) => {
	const hashComparison = useMemo((): string => {
		if (lastAttempt === import.meta.env.VITE_BITCOIN_ADDRESS) {
			return 'hash-block__address--green'
		}
		else {
			return 'hash-block__address--red'
		}
	}, [lastAttempt])

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
					<p className={`hash-block__address ${hashComparison}`}>
						{ lastAttempt }
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