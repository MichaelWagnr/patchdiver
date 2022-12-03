import styled from 'styled-components'
import { IoIosColorFilter } from 'react-icons/io'
import { useState } from 'react'
import Tag from '../../components/Dx100Editor/Menu/Save/Tag'
import {
	genreTags,
	patchTags,
} from '../../components/Dx100Editor/Menu/Save/Form.tags'

const FilterForm = ({ loadPatches }) => {
	const [filterIsActive, setFilterIsActive] = useState(false)
	//TODO lift formData and setFormData state, so that filter persists between profile and main view
	const [formData, setFormData] = useState({
		orderBy: 'mostLiked',
		genreTag: '',
		patchTag: '',
	})

	const handleInputChange = (e) => {
		const i = e.target
		const { type, value } = e.target.dataset
		if (type && value && value === formData[type]) {
			return setFormData({ ...formData, [type]: '' })
		} else if (type && value) {
			return setFormData({ ...formData, [type]: value })
		} else {
			return setFormData({ ...formData, [i.id]: i.value })
		}
	}

	return (
		<>
			<Toggle
				className="filter"
				onClick={(e) => {
					e.preventDefault()
					filterIsActive
						? e.currentTarget.classList.remove('filter-is-active')
						: e.currentTarget.classList.add('filter-is-active')
					setFilterIsActive(!filterIsActive)
				}}>
				<IoIosColorFilter />
			</Toggle>
			{filterIsActive && (
				<StyledForm>
					<h3>Filter</h3>
					<form
						onSubmit={(e) => {
							e.preventDefault()
							loadPatches(formData)
						}}>
						<label htmlFor="orderBy">Order By</label>
						<select
							id="orderBy"
							name="orderBy"
							value={formData.orderBy}
							onChange={(e) => handleInputChange(e)}>
							<option value="mostLiked">Most Liked</option>
							<option value="mostRecent">Most Recent</option>
						</select>
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
						<button type="submit">Apply Filter</button>
					</form>
				</StyledForm>
			)}
		</>
	)
}

const StyledForm = styled.div`
	position: absolute;
	right: 20px;
	bottom: 25px;
	width: 350px;
	height: 400px;
	border: 1px solid var(--secondary-fg);
	border-radius: 5px;
	padding: 15px;
	color: var(--secondary-fg);
	display: grid;
	grid-template-rows: 30px 1fr;

	h3 {
		font-size: 1.3rem;
		position: relative;
		left: 30px;
		/* bottom: 5px; */
	}

	form {
		/* align-self: center; */
		/* justify-self: center; */
		display: grid;
		grid-template-columns: 2fr 5fr;
		grid-template-rows: 40px 1fr;
		/* overflow: hidden; */
	}

	label {
		margin: 10px;
		align-self: center;
		/* justify-self: end; */
	}

	input,
	option,
	select,
	textarea {
		background: inherit;
		border: 1px solid var(--secondary-fg);
		height: 28px;
		color: var(--secondary-fg);
		align-self: center;

		&:focus {
			outline: none;
		}
	}

	select {
		color: var(--primary-fg);
	}

	button {
		background: inherit;
		color: inherit;
		width: 110%;
		margin-top: 11px;
		color: var(--primary-fg);
		border: 1px solid var(--secondary-fg);
		border-radius: 5px;
		padding: 5px 15px;
		justify-self: center;
		grid-row: -1;
		grid-column: 1 / span 2;
	}
`

const Toggle = styled.div`
	&.filter {
		font-size: 2rem;
		position: absolute;
		right: 330px;
		bottom: 380px;
		z-index: 1;
		color: var(--secondary-fg-dark);

		&:hover {
			cursor: pointer;
		}

		transform: rotate(0);
		transition: transform 0.5s;
	}
	&.filter-is-active {
		color: var(--primary-fg);
		transform: rotate(360deg);
	}
`

const Tags = styled.div`
	grid-column: 1 / span 2;

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

export default FilterForm
