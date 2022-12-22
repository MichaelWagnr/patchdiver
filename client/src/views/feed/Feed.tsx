import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Editor from '../../components/Dx100Editor/Editor'
import EllipsisSpinner from '../../components/EllipsisSpinner'
import Spacer from '../../components/Spacer'
import { UserContext } from '../../contexts/UserContext'
import FilterForm from './FilterForm'
import Patch from './Patch'
import ProfileCard from './ProfileCard'

const Feed = ({ profileView }) => {
	const [editorIsActive, setEditorIsActive] = useState(false)
	const [patchArray, setPatchArray] = useState(null)
	const [noResultsStatus, setNoResultsStatus] = useState(false)
	const { user } = useContext(UserContext)

	const loadPatches = (filterData) => {
		setNoResultsStatus(false)

		const endpoint = `${
			import.meta.env.VITE_API_BASE
		}/api/patches?profileView=${profileView}&userId=${
			user ? user._id : null
		}&orderBy=${filterData?.orderBy ? filterData.orderBy : null}&genreTag=${
			filterData?.genreTag ? filterData.genreTag : null
		}&patchTag=${filterData?.patchTag ? filterData.patchTag : null}`

		fetch(endpoint)
			.then((res) => {
				return res.json()
			})
			.then((data) => {
				if (data.status !== 200) setNoResultsStatus(true)
				if (data.dbResponse.length === 0 && !profileView)
					alert('No patches found, please adjust filter')
				//TODO when filter results return an empty array it
				//TODO would be nice to have the feed print an error
				// if (data.dbResponse === []) setNoResultsStatus(true)
				setPatchArray(data.dbResponse)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	useEffect(() => {
		loadPatches()
	}, [profileView])

	return (
		<Page>
			{editorIsActive && (
				<Overlay
				// onClick={() => setEditorIsActive(false)}
				//TODO it would be nice if clicking the overlay also disactivated the active patch class
				></Overlay>
			)}
			{profileView && <ProfileCard />}

			<FilterForm loadPatches={loadPatches} />
			<FeedContainer>
				<Spacer height="55px" width="400px" />
				{patchArray ? (
					patchArray.map((patch) => (
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
							user={user}
						/>
					))
				) : noResultsStatus ? (
					<div>No Results Found</div>
				) : (
					<EllipsisSpinner size="large" />
				)}
			</FeedContainer>
			<EditorContainer className={editorIsActive ? 'active' : null}>
				<Editor editorIsActive={editorIsActive} />
			</EditorContainer>
		</Page>
	)
}

const Page = styled.main`
	width: 1440px;
	min-height: 500px;
	position: relative;
`

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
	/* width: 100%; */
	/* width: fit-content; */
	position: absolute;
	left: calc((100% - 1334px) / 2);
	/* @media only screen and (min-width: 1334px) {
		left: calc((100vw - 1334px) / 2);
	} */
	/* margin: 0px auto; */
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
