import styled from 'styled-components'
import { TbTag } from 'react-icons/tb'
import { BiLike } from 'react-icons/bi'
import { parseVoice } from '../../components/Dx100Editor/Dx100.parseVoice'
import { useContext } from 'react'
import { PatchContext } from '../../contexts/PatchContext'

const Patch = ({
	setEditorActive,
	editorActive,
	_id,
	created,
	userName,
	userAvatar,
	manufacturer,
	model,
	patchName,
	description,
	patchTag,
	genreTag,
	inspiredArtist,
	inspiredTrack,
	albumAvatar,
	likes,
	patchData,
}) => {
	const { setVoice, setPatch } = useContext(PatchContext)
	const handleVoiceLoad = () => {
		setVoice(parseVoice(patchData))
		setPatch(parseVoice(patchData))
	}

	return (
		<PatchCard>
			<button
				className="close"
				onClick={(e) => {
					e.stopPropagation()
					setEditorActive(false)
					e.target.parentElement.classList.remove('active')
				}}>
				×
			</button>

			{userAvatar ? (
				<img src={userAvatar} alt={userName} className="avatar" />
			) : (
				<div className="imgNull avatar bordered"></div>
			)}

			<button
				className="launch"
				onClick={(e) => {
					handleVoiceLoad()
					setEditorActive(true)
					e.target.parentElement.classList.add('active')
				}}>
				LAUNCH
			</button>

			{albumAvatar ? (
				<img src={albumAvatar} alt="InspiredBy" className="album" />
			) : (
				<div className="imgNull album bordered"></div>
			)}

			<div className="patch">
				<span className="patch-name">{patchName}</span> <br />{' '}
				<span className="user-name">by {userName}</span>
			</div>
			<div className="instrument">
				{manufacturer} <br /> {model}
			</div>
			<div className="inspiration">
				{inspiredTrack} <br /> {inspiredArtist}
			</div>

			<div className="tags">
				<div className="tag">
					<div className="tag-icon">
						<TbTag />
					</div>
					<span> {genreTag} </span>
				</div>

				<div className="tag">
					<div className="tag-icon">
						<TbTag />
					</div>
					<span> {patchTag} </span>
				</div>
			</div>

			<div className="border-left"></div>

			<div className="description">
				{description} <br /> <span className="created">created: {created}</span>
			</div>
			<div className="like">
				<div className="likes">{likes}</div>
				<BiLike className="icon" />
			</div>
		</PatchCard>
	)
}

const PatchCard = styled.div`
	height: 200px;
	width: 660px;
	display: grid;
	align-items: center;
	padding: 10px 10px 10px 0px;
	column-gap: 15px;
	grid-template-columns: 25px 60px 160px 2px 1fr 60px;
	grid-template-rows: repeat(3, 60px);

	border: 1px solid var(--primary-fg);
	border-radius: 5px;
	margin: 20px auto;
	position: relative;
	top: 0px;

	.close {
		display: none;
	}

	img,
	.imgNull,
	.launch {
		border-radius: 50%;
		height: 60px;
		width: 60px;
		&.bordered {
			border: 1px solid var(--primary-fg);
		}
	}

	.avatar {
		grid-row: 1;
		grid-column: 2;
	}

	.album {
		grid-row: 3;
		grid-column: 2;
	}

	.launch {
		border: 1px solid var(--primary-fg);
		background: var(--primary-bg);
		color: var(--primary-fg);
		font-size: 0.7rem;
		position: relative;
		left: 10px;

		grid-row: 2;
		grid-column: 1;

		transition: transform 1s;

		&:hover {
			transform: scale(1.1);
			color: var(--primary-fg-light);
			border-color: var(--primary-fg-light);
		}
	}

	.patch {
		grid-row: 1;
		grid-column: 3;

		.patch-name {
			font-size: 1.6rem;
		}

		.user-name {
			font-size: 0.8rem;
		}
	}

	.instrument {
		border-left: var(--vertical-border);
		padding-left: 10px;

		grid-row: 2;
		grid-column: 3;
	}

	.inspiration {
		grid-row: 3;
		grid-column: 3;
	}

	.tags {
		display: flex;
		gap: 10px;
		align-items: center;
		grid-row: 3;
		grid-column: 4 / span 2;
	}

	.tag {
		padding: 2px 5px;
		border: 1px solid var(--primary-fg);
		border-radius: 5px;
		margin: 5px 0px;
		width: fit-content;

		span {
			position: relative;
			bottom: 2px;
		}

		.tag-icon {
			display: inline-block;
			transform: rotate(0);
		}

		&:hover .tag-icon {
			transition: all 0.5s;
			transform: rotate(-18deg) scale(1.2);
		}
	}

	.border-left {
		width: 2px;
		height: 60px;
		border-left: var(--vertical-border);
		/* background: var(--primary-fg); */

		grid-row: 1 / span 2;
		grid-column: 4;
	}

	.description {
		/* padding-right: 40px; */
		grid-row: 1 / span 2;
		grid-column: 5;

		.created {
			font-size: 0.8rem;
		}
	}

	.like {
		width: 40px;
		height: 40px;
		border: 1px solid var(--primary-fg);
		border-radius: 50%;
		display: grid;
		place-content: center;

		grid-column: 6;
		grid-row: 3;
		place-self: center;

		.likes {
			position: relative;
			bottom: 20px;
			width: 40px;
			font-size: 0.8rem;
			text-align: center;
		}

		.icon {
			font-size: 1.3rem;
			position: relative;
			bottom: 7px;
			left: 10px;
			color: var(--primary-fg);
		}
	}

	/*
	======================================= 
	Patch Active 
	=======================================  
	*/

	&.active {
		height: 50px;
		position: absolute;
		top: 40px;
		left: calc((100vw - 660px) / 2);
		z-index: 10;

		grid-template-columns: 40px 60px 140px 100px 1fr 40px;
		grid-template-rows: 50px;

		align-content: center;

		.launch,
		.album,
		.inspiration,
		.border-left,
		.description {
			display: none;
		}

		.close {
			display: inline-block;
			grid-row: 1;
			grid-column: 1;
			margin-left: 10px;

			background: var(--primary-bg);
			color: var(--primary-fg);

			width: 35px;
			height: 35px;
			border: 1px solid var(--primary-fg);
			border-radius: 50%;
			display: grid;
			place-content: center;

			font-size: 1.5rem;
			.close-icon {
			}
		}

		.avatar {
		}

		.patch {
			position: relative;
			bottom: 2px;

			.patch-name {
			}
			.user-name {
			}
		}

		.instrument {
			grid-row: 1;
			grid-column: 4;
		}

		.tags {
			grid-row: 1;
			grid-column: 5;
		}

		.like {
			grid-row: 1;
			grid-column: 6;

			width: 35px;
			height: 35px;

			.likes {
				display: none;
			}

			.icon {
				left: 1px;
				bottom: 0px;
			}
		}
	}
`

export default Patch