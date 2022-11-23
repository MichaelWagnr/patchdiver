import MenuView from './Menu.style'

const Theme = ({ setTheme }) => {
	return (
		<MenuView>
			<h2>Theme</h2>

			<label htmlFor="theme">Choose Theme:</label>
			<select id="theme" onChange={(e) => setTheme(e.target.value)}>
				<option value="default">Default</option>
				<option value="jupiter8">Jupiter 8</option>
				<option value="akaimpc60">Mpc 60</option>
				<option value="juno106">Juno 106</option>
			</select>
		</MenuView>
	)
}

export default Theme
