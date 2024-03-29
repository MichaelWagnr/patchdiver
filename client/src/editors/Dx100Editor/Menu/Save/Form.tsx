import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Tag from './Tag'
import { genreTags, patchTags } from './Form.tags'
import { PatchContext } from '../../../../contexts/PatchContext'
import EllipsisSpinner from '../../../../components/EllipsisSpinner'
import { UserContext } from '../../../../contexts/UserContext'
import { DX100Patch, serverResponse, user } from '../../../../types'
import compileVoice from '../../utilities/Dx100.compileVoice'

const Form = () => {
	const { voice } = useContext<{ voice: DX100Patch }>(PatchContext)
	const { user } = useContext<{ user: user }>(UserContext)
	const [fetchStatus, setFetchStatus] = useState<string | null>(null)
	const [isSaving, setIsSaving] = useState(false)
	const [formData, setFormData] = useState({
		created: '',
		userName: user?.userName,
		userAvatar: user?.avatarSrc,
		userId: user?._id,
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
		patchData: compileVoice(voice),
	})

	useEffect(() => {
		if (user) {
			setFormData({
				...formData,
				userName: user.userName,
				userAvatar: user.avatarSrc,
				userId: user._id,
			})
		}
	}, [user])

	useEffect(() => {
		if (voice) {
			setFormData({
				...formData,
				patchData: compileVoice(voice),
			})
		}
	}, [voice])

	//TODO split up into two seperate functions, one to handle input changes, one to handle tag changes for better typing and cleaner code.
	const handleInputChange = (e: any) => {
		const i = e.target
		const { type, value } = e.target.dataset
		if (type && value) {
			return setFormData({ ...formData, [type]: value })
		} else {
			return setFormData({ ...formData, [i.id]: i.value })
		}
	}

	const getAlbumArt = async (track: string, artist: string): Promise<void> => {
		setFetchStatus('fetching')
		fetch(
			`${
				import.meta.env.VITE_API_BASE
			}/api/artwork?track=${track}&artist=${artist}`
		)
			.then((res) => {
				if (res.status !== 200) {
					setFormData({ ...formData, albumAvatar: '' })
					return setFetchStatus('404')
				}
				return res.json()
			})
			.then((data: { imgSrc?: string }) => {
				if (data.imgSrc !== undefined) {
					setFormData({ ...formData, albumAvatar: data.imgSrc })
					return setFetchStatus(null)
				} else {
					setFormData({ ...formData, albumAvatar: '' })
					return setFetchStatus('404')
				}
			})
			.catch((err: Error) => console.log(err))
	}

	const handleBlur = () => {
		if (
			formData.inspiredTrack.length > 0 ||
			formData.inspiredArtist.length > 0
		) {
			getAlbumArt(formData.inspiredTrack, formData.inspiredArtist)
		} else {
			setFormData({ ...formData, albumAvatar: '' })
			setFetchStatus(null)
		}
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setIsSaving(true)

		fetch(`${import.meta.env.VITE_API_BASE}/api/patches/`, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify(formData),
		})
			.then((res) => {
				console.log(res)
				return res.json()
			})
			.then((data: serverResponse) => {
				setIsSaving(false)
				// if (data.status === 401) return alert(data.message)
				if (data.status !== 200) return alert(data.message)
				alert('Patch successfully saved to your profile!')
				console.log(data)
			})
			.catch((err: Error) => {
				console.log(err)
			})
	}

	return (
		<StyledForm onSubmit={(e) => handleSubmit(e)}>
			<label htmlFor="patchName">Patch Name</label>
			<input
				type="text"
				required
				autoComplete="off"
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
				required
				id="manufacturer"
				name="manufacturer"
				value={formData.manufacturer}
				onChange={(e) => handleInputChange(e)}>
				<option value="Yamaha">Yamaha</option>
			</select>
			<label htmlFor="model">Model</label>
			<select
				required
				id="model"
				name="model"
				value={formData.model}
				onChange={(e) => handleInputChange(e)}>
				<option value="DX100">DX100</option>
				{/* <option value="DX21">DX21</option>
				<option value="DX27">DX27</option>
				<option value="TX81Z">TX81Z</option> */}
			</select>
			<div className="info">Inspired by</div>
			<label htmlFor="inspiredTrack">Track Name</label>
			<input
				type="text"
				autoComplete="off"
				id="inspiredTrack"
				name="inspiredTrack"
				value={formData.inspiredTrack}
				onChange={(e) => handleInputChange(e)}
				onBlur={() => handleBlur()}
			/>
			<label htmlFor="inspiredArtist">Artist Name</label>
			<input
				type="text"
				autoComplete="off"
				id="inspiredArtist"
				name="inspiredArtist"
				value={formData.inspiredArtist}
				onChange={(e) => handleInputChange(e)}
				onBlur={() => handleBlur()}
			/>
			{formData.albumAvatar && !fetchStatus ? (
				<img
					className="albumAvatar"
					src={formData.albumAvatar}
					alt="Album Artwork"
				/>
			) : (
				<div className="albumAvatar">
					{fetchStatus === 'fetching' ? (
						<EllipsisSpinner size="small" />
					) : fetchStatus === '404' ? (
						'N/A'
					) : (
						''
					)}
				</div>
			)}
			<div className="info">Limit 250 characters</div>
			<label htmlFor="description">Description</label>
			<textarea
				autoComplete="off"
				name="description"
				id="description"
				onChange={(e) => handleInputChange(e)}></textarea>

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
			<button type="submit" disabled={isSaving ? true : false}>
				{isSaving ? <EllipsisSpinner size="small" /> : 'Save Patch'}
			</button>
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

		display: grid;
		place-content: center;

		opacity: 1;
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
