import { useState } from 'react'
import styled from 'styled-components'
import Editor from '../../components/Dx100Editor/Editor'
import Spacer from '../../components/Spacer'
import Patch from './Patch'
import patchMockData from './Patch.placeHolders'
import ProfileCard from './ProfileCard'

const Feed = ({ profileView }) => {
	const [editorIsActive, setEditorIsActive] = useState(false)

	return (
		<Page>
			{editorIsActive && (
				<Overlay
				// onClick={() => setEditorIsActive(false)}
				//TODO it would be nice if clicking the overlay also disactivated the active patch class
				></Overlay>
			)}
			{profileView && <ProfileCard />}
			<FeedContainer>
				<Spacer height="55px" width="400px" />
				{patchMockData.map((patch) => (
					<Patch
						setEditorIsActive={setEditorIsActive}
						editorIsActive={editorIsActive}
						key={patch._id}
						_id={patch._id}
						created={patch.created}
						userName={patch.userName}
						userAvatar={patch.userAvatar}
						manufacturer={patch.manufacturer}
						model={patch.model}
						patchName={patch.patchName}
						description={patch.description}
						patchTag={patch.patchTag}
						genreTag={patch.genreTag}
						inspiredArtist={patch.inspiredArtist}
						inspiredTrack={patch.inspiredTrack}
						albumAvatar={patch.albumAvatar}
						likes={patch.likes}
						patchData={patch.patchData}
					/>
				))}
			</FeedContainer>
			<EditorContainer className={editorIsActive ? 'active' : null}>
				<Editor editorIsActive={editorIsActive} />
			</EditorContainer>
		</Page>
	)
}

const Page = styled.main``

const Overlay = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	background: var(--primary-bg);
	opacity: 0.955;
	z-index: 5;
`

const FeedContainer = styled.section`
	height: 100vh;
	overflow-y: scroll;
`

const EditorContainer = styled.div`
	width: 100%;
	max-width: fit-content;
	position: absolute;
	@media only screen and (min-width: 1334px) {
		left: calc((100vw - 1334px) / 2);
	}
	top: 2000px;
	opacity: 0;
	overflow-x: scroll;

	z-index: 10;

	transition: top 0.6s ease-in-out;

	&.active {
		top: 120px;
		opacity: 1;
	}
`

export default Feed
