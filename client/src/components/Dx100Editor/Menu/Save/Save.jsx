import MenuView from '../Menu.style'
import styled from 'styled-components'
import Form from './Form'

const Save = () => {
	return (
		<MenuView>
			<SaveMenu>
				<div className="save">
					<h2>Save</h2>
					<Form />
				</div>
				<div className="border-left"></div>
				<div className="considerations">
					<h2>Considerations</h2>
					<p>
						Saving patches using the patch editor is non-desctructive. Any
						changes that are sent to the user synthesizer happen in the edit
						buffer, and are not written to the synthesizer.
					</p>
					<p>
						This is by design, such that overwriting native patches can be opted
						into.
					</p>
					<p>
						Saving in this menu will save patches to a profile for future
						reference.
					</p>
					<p>
						To save the sent patches natively on the user synthesizer refer to a
						user manual.
					</p>
				</div>
			</SaveMenu>
		</MenuView>
	)
}

const SaveMenu = styled.div`
	/* width: 550px; */
	display: grid;
	grid-template-columns: 1fr 2px 1fr;
	gap: 20px;

	.border-left {
		width: 1px;
		/* height: 255px; */
		height: 100%;
		background: var(--secondary-fg-light);
	}

	.considerations {
		color: var(--secondary-fg-light);
	}
`

export default Save
