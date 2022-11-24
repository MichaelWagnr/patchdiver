import styled from 'styled-components'
import { TbTag } from 'react-icons/tb'
import { useState } from 'react'

const Tag = ({ name, type }) => {
	const [isChecked, setIsChecked] = useState(false)

	return (
		<StyledTag
			onClick={() => setIsChecked(true)}
			className={isChecked ? 'checked' : null}>
			<TbTag className="icon" />
			<input type="radio" id={name} name={type} value={name} />
			<label htmlFor={name}>{name}</label>
		</StyledTag>
	)
}
const StyledTag = styled.div`
	border: 1px solid var(--secondary-fg);
	border-radius: 5px;
	width: fit-content;
	padding: 3px;
	transition: all 0.5s;

	.icon {
		transform: rotate(0);
		color: var(--secondary-fg);
	}

	&:hover {
		transform: scale(1.03);
		.icon {
			transform: rotate(-15deg);
		}
	}

	*:hover,
	&:hover {
		cursor: pointer;
	}

	label {
		color: var(--secondary-fg);
		font-size: 0.8rem;
		position: relative;
		bottom: 3px;
		margin-left: 3px;
	}

	input {
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
	}

	&.checked,
	&.checked > * {
		border-color: var(--primary-fg);
		color: var(--primary-fg);

		.icon {
			transform: rotate(-15deg);
		}
	}
`
export default Tag
