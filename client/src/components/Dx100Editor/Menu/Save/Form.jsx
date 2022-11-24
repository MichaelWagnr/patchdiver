import { useContext, useState } from 'react'
import styled from 'styled-components'
import Tag from './Tag'
import { genreTags, patchTags } from './Form.tags'
import { PatchContext } from '../../../../contexts/PatchContext'

const Form = () => {
	const { voice } = useContext(PatchContext)
	const [albumImage, setAlbumImage] = useState(null)
	const [formData, setFormData] = useState({
		created: '',
		userName: 'Jane Doe',
		userAvatar: '',
		manufacturer: 'Yamaha',
		model: 'DX100',
		patchName: '',
		description: '',
		patchTag: '',
		genreTag: '',
		inspiredArtist: '',
		inspiredTrack: '',
		albumAvatar: '',
		likes: 0,
		patchData: voice,
	})

	const handleInputChange = (e) => {
		const i = e.target
		const { type, value } = e.target.dataset
		if (type && value) {
			return setFormData({ ...formData, [type]: value })
		} else {
			return setFormData({ ...formData, [i.id]: i.value })
		}
	}

	const getAlbumArt = async (track, artist) => {
		console.log(track, artist)
		// fetch(`/album-art/`)
		// album-art?track=sunshine recorder&artist=boards of canada
		fetch(`/api/album-art?track=${track}&artist=${artist}`)
			.then((res) => res.json())
			.then((data) => console.log(data))
	}

	const handleBlur = () => {
		if (formData.inspiredTrack.length > 0 && formData.inspiredArtist.length > 0)
			getAlbumArt(formData.inspiredTrack, formData.inspiredArtist)
	}

	return (
		<StyledForm>
			<label htmlFor="patchName">Patch Name</label>
			<input
				type="text"
				id="patchName"
				name="patchName"
				value={formData.patchName}
				onChange={(e) => handleInputChange(e)}
			/>
			<div className="info">
				DX101 Editor is cross-compatible with most 4-OP FM sythesizers but does
				not yet include parameters not found on the DX100 (ie. TX81Z waveforms).
			</div>
			<label htmlFor="manufacturer">Manufacturer</label>
			<select
				id="manufacturer"
				name="manufacturer"
				value={formData.manufacturer}
				onChange={(e) => handleInputChange(e)}>
				<option value="Yamaha">Yamaha</option>
			</select>
			<label htmlFor="model">Model</label>
			<select
				id="model"
				name="model"
				value={formData.model}
				onChange={(e) => handleInputChange(e)}>
				<option value="DX100">DX100</option>
				<option value="DX21">DX21</option>
				<option value="DX27">DX27</option>
				<option value="TX81Z">TX81Z</option>
			</select>
			<div className="info">Inspired by</div>
			<label htmlFor="inspiredTrack">Track Name</label>
			<input
				type="text"
				id="inspiredTrack"
				name="inspiredTrack"
				value={formData.inspiredTrack}
				onChange={(e) => handleInputChange(e)}
				onBlur={() => handleBlur()}
			/>
			<label htmlFor="inspiredArtist">Artist Name</label>
			<input
				type="text"
				id="inspiredArtist"
				name="inspiredArtist"
				value={formData.inspiredArtist}
				onChange={(e) => handleInputChange(e)}
				onBlur={() => handleBlur()}
			/>
			{albumImage ? (
				<img className="albumAvatar" />
			) : (
				<div className="albumAvatar"></div>
			)}
			<div className="info">Limit 250 characters</div>
			<label htmlFor="description">Description</label>
			<textarea name="description" id="description"></textarea>

			<Tags>
				<div className="genre tags">
					<label htmlFor="genre" className="tag-container-label">
						Genre
					</label>
					<div className="tag-container">
						{genreTags.map((tag) => (
							<Tag
								name={tag}
								key={tag}
								type="genreTag"
								handleInputChange={handleInputChange}
								isSelected={formData.genreTag === tag ? true : null}
							/>
						))}
					</div>
				</div>

				<div className="patch tags">
					<label htmlFor="patch" id="tag-container-label">
						Patch
					</label>
					<div className="tag-container">
						{patchTags.map((tag) => (
							<Tag
								name={tag}
								key={tag}
								type="patchTag"
								handleInputChange={handleInputChange}
								isSelected={formData.patchTag === tag ? true : null}
							/>
						))}
					</div>
				</div>
			</Tags>
			<button type="submit">Save Patch</button>
		</StyledForm>
	)
}

const StyledForm = styled.form`
	width: 100%;
	padding: 20px 10px 20px 0px;
	display: grid;
	grid-template-columns: 150px 250px 1fr;
	gap: 10px;
	align-items: center;

	label {
		grid-column: 1;
	}

	input,
	option,
	select,
	textarea {
		background: inherit;
		border: 1px solid var(--primary-fg);
		height: 28px;
		color: var(--primary-fg);
	}

	#description {
		height: calc(2 * 28px);
		grid-column: 2 / span 2;
		resize: none;
		font-family: inherit;
	}

	.info {
		color: var(--secondary-fg-light);
		grid-column: 1 / span 3;
		margin: 5px 0px;
		justify-self: center;
		font-size: 0.8rem;
	}

	.albumAvatar {
		width: 60px;
		height: 60px;
		border: 1px solid var(--primary-fg);

		border-radius: 50%;
		grid-column: 3;
		grid-row: 6 / span 2;
		justify-self: center;
	}

	button[type='submit'] {
		background: inherit;
		border: 1px solid var(--primary-fg);
		color: var(--primary-fg);
		width: 100px;
		padding: 5px;
		border-radius: 5px;
		grid-column: 1 / span 3;
		justify-self: center;
		margin-top: 30px;

		transition: all 0.5s;

		&:hover {
			transform: scale(1.05);
		}
	}
`

const Tags = styled.div`
	grid-column: 1 / span 3;

	display: grid;
	grid-template-columns: 3fr 2fr;
	grid-template-rows: 1fr;

	.tags > {
		margin-bottom: 5px;
	}

	#tag-container-label {
		margin: 3px 0px;
	}

	.tag-container {
		display: flex;
		gap: 2px;
		flex-wrap: wrap;
		margin-top: 10px;
	}

	.genre {
		grid-column: 1;
	}

	.patch {
		grid-column: 2;
	}
`

export default Form
