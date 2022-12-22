import MenuView from '../Menu.style'
import styled from 'styled-components'

const Theme = ({ setTheme }) => {
	return (
		<MenuView>
			<ThemeMenu>
				<h2>Theme</h2>
				<p>
					Color themes for the editor are based off of classic vintage
					synthesizers and samplers
				</p>
				<label htmlFor="theme">Options</label>
				<select
					id="theme"
					defaultValue="choose"
					onChange={(e) => setTheme(e.target.value)}>
					<option value="choose" disabled>
						Choose here
					</option>
					<option value="default">Default</option>
					<option value="jupiter8">Jupiter 8</option>
					<option value="akaimpc60">Mpc 60</option>
					<option value="juno106">Juno 106</option>
				</select>
			</ThemeMenu>
		</MenuView>
	)
}

const ThemeMenu = styled.div`
	width: 550px;

	label {
		color: var(--secondary-fg-light);
	}

	select {
		display: block;
		margin-top: 5px;
		width: 200px;
		height: 30px;
		background: inherit;
		color: var(--secondary-fg-light);
		outline: var(--secondary-fg-light);
	}
`

export default Theme
