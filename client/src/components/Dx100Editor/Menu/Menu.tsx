import styled from 'styled-components'
import { Routes, Route, NavLink } from 'react-router-dom'
import Save from './Save/Save'
import Theme from './Theme/Theme'
import Load from './Load/Load'

type Props = {
	menuIsActive: boolean
	setTheme: React.Dispatch<React.SetStateAction<string>>
}

//TODO replace nested routes with state pointing to which sub-menu is selected and conditional rendering for each corresponding element. (subMenu === 'Load' && <Load />)
const Menu = ({ menuIsActive, setTheme }: Props) => {
	return (
		<>
			<Navigation className={menuIsActive ? 'active' : null}>
				<Option to="menu/Load">Load</Option>
				<Option to="menu/save">Save</Option>
				<Option to="menu/theme">Theme</Option>
			</Navigation>
			<MenuSection className={menuIsActive ? 'active' : null}>
				<Routes>
					<Route path="menu/load" element={<Load />} />
					<Route path="menu/save" element={<Save />} />
					<Route path="menu/theme" element={<Theme setTheme={setTheme} />} />
				</Routes>
			</MenuSection>
		</>
	)
}

const Overlay = styled.div`
	position: absolute;
	background: var(--primary-bg-dark);
	backdrop-filter: blur(100px);
	opacity: 0.85;

	& > * {
		opacity: initial;
	}

	h1 {
		color: var(--primary-fg);
	}

	transition: all 0.2s;
`

const Navigation = styled(Overlay)`
	height: 657px;
	width: 262px;

	top: 0px;
	left: -262px;

	z-index: 9;
	border-right: 2px solid rgba(120, 120, 120, 0.3);

	display: flex;
	flex-direction: column;
	padding: 30px 0px;

	&.active {
		top: 0px;
		left: 2px;
	}
`

const MenuSection = styled(Overlay)`
	top: 662px;
	left: 1336px;
	height: 657px;
	width: 1068px;
	z-index: 8;

	&.active {
		top: 0px;
		left: 264px;
	}
`

const Option = styled(NavLink)`
	text-decoration: none;
	font-size: 1.5rem;
	display: block;
	color: var(--primary-fg);
	padding: 20px;

	&:hover {
		background: rgba(125, 125, 125, 0.2);
		color: var(--primary-fg-light);
	}

	&.active {
		color: var(--primary-fg-light);
	}

	&.active::after {
		content: '⁘';
		margin-left: 6px;
		font-weight: bold;
		font-size: 0.8rem;
		position: relative;
		bottom: 3.5px;
	}
`

export default Menu
