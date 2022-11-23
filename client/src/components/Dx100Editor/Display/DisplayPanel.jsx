import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { PatchContext } from '../../../contexts/PatchContext'
import Algorithm1 from './Algorithms/Algorithm1'
import Algorithm2 from './Algorithms/Algorithm2'
import Algorithm3 from './Algorithms/Algorithm3'
import Algorithm4 from './Algorithms/Algorithm4'
import Algorithm5 from './Algorithms/Algorithm5'
import Algorithm6 from './Algorithms/Algorithm6'
import Algorithm7 from './Algorithms/Algorithm7'
import Algorithm8 from './Algorithms/Algorithm8'

const DisplayPanel = () => {
	const { patch } = useContext(PatchContext)

	const [num, setNum] = useState(null)

	useEffect(() => {
		if (patch) setNum(patch?.alg?.value)
	}, [patch])

	const highlighted = '0.44'
	const transparent = '0.2'

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1048"
			height="189"
			fill="none"
			viewBox="0 0 1048 189">
			<defs>
				<filter id="f1" x="0" y="0">
					<feGaussianBlur in="SourceGraphic" stdDeviation="0.64" />
				</filter>
			</defs>

			<g filter="url(#f1)">
				{/* Panel black backdrop */}
				<path fill="#000" d="M0 0h1048v191H0V0Z" />

				<Algorithm1
					isActive={num === 0 ? true : null}
					highlighted={highlighted}
					transparent={transparent}
				/>
				<Algorithm2
					isActive={num === 1 ? true : null}
					highlighted={highlighted}
					transparent={transparent}
				/>
				<Algorithm3
					isActive={num === 2 ? true : null}
					highlighted={highlighted}
					transparent={transparent}
				/>
				<Algorithm4
					isActive={num === 3 ? true : null}
					highlighted={highlighted}
					transparent={transparent}
				/>
				<Algorithm5
					isActive={num === 4 ? true : null}
					highlighted={highlighted}
					transparent={transparent}
				/>
				<Algorithm6
					isActive={num === 5 ? true : null}
					highlighted={highlighted}
					transparent={transparent}
				/>
				<Algorithm7
					isActive={num === 6 ? true : null}
					highlighted={highlighted}
					transparent={transparent}
				/>
				<Algorithm8
					isActive={num === 7 ? true : null}
					highlighted={highlighted}
					transparent={transparent}
				/>

				{/* ADSR grid-lines */}
				<path
					fill="var(--fm-display-fg)"
					fillOpacity=".15"
					d="M12 82h236v2H12v-2Zm0-10h236v2H12v-2Zm0-10h236v2H12v-2Zm0-10h236v2H12v-2Zm0-10h236v2H12v-2Zm0-10h236v2H12v-2Zm0-10h236v2H12v-2Zm0-10h236v2H12v-2Zm262 70h236v2H274v-2Zm0-10h236v2H274v-2Zm0-10h236v2H274v-2Zm0-10h236v2H274v-2Zm0-10h236v2H274v-2Zm0-10h236v2H274v-2Zm0-10h236v2H274v-2Zm0-10h236v2H274v-2Zm262 70h236v2H536v-2Zm0-10h236v2H536v-2Zm0-10h236v2H536v-2Zm0-10h236v2H536v-2Zm0-10h236v2H536v-2Zm0-10h236v2H536v-2Zm0-10h236v2H536v-2Zm0-10h236v2H536v-2Zm262 70h236v2H798v-2Zm0-10h236v2H798v-2Zm0-10h236v2H798v-2Zm0-10h236v2H798v-2Zm0-10h236v2H798v-2Zm0-10h236v2H798v-2Zm0-10h236v2H798v-2Zm0-10h236v2H798v-2Z"
				/>
			</g>
		</svg>
	)
}

export default DisplayPanel
