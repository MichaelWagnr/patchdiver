import { useContext } from 'react'
import styled from 'styled-components'
import EllipsisSpinner from '../../components/EllipsisSpinner'
import { UserContext } from '../../contexts/UserContext'

const ProfileCard = () => {
	const { user } = useContext(UserContext)
	return (
		<Container>
			{user ? (
				<Card>
					<div className="banner"></div>
					<img src={user.avatarSrc} alt={user.userName} className="avatar" />
					<h2>{user.userName}</h2>
					<div className="info">
						<div className="description"></div>
						<p className="inspired">Inspired by:</p>
						<div className="badges">
							<div className="first-row">
								<div className="badge"></div>
								<div className="badge"></div>
								<div className="badge"></div>
								<div className="badge"></div>
								<div className="badge"></div>
								<div className="badge"></div>
								<div className="badge"></div>
							</div>
							<div className="second-row">
								<div className="badge"></div>
								<div className="badge"></div>
								<div className="badge"></div>
								<div className="badge"></div>
								<div className="badge"></div>
								<div className="badge"></div>
								<div className="badge"></div>
							</div>
						</div>
					</div>
				</Card>
			) : (
				<EllipsisSpinner size="large" />
			)}
		</Container>
	)
}

const Container = styled.div`
	position: absolute;
	top: 75px;
	left: 20px;
	width: 350px;
	height: 500px;
	border: 1px solid var(--primary-fg);
	border-radius: 5px;
	overflow: hidden;
`

const Card = styled.div`
	padding: 10px;

	.banner {
		height: 120px;
		background: var(--primary-bg-light);
	}

	.avatar {
		width: 120px;
		height: 120px;
		border-radius: 50%;
		position: relative;
		bottom: 60px;
		left: 20px;
	}

	h2 {
		position: relative;
		bottom: 115px;
		left: 150px;
	}

	.info {
		position: relative;
		bottom: 70px;
		border-top: 1px solid var(--primary-fg);
		padding-top: 10px;
	}

	.description {
		height: 90px;
	}

	.inspired {
		position: absolute;
		bottom: 110px;
		color: var(--secondary-fg);
	}

	.badges {
		margin-top: 30px;
		width: 150%;
		position: relative;
		top: 30px;
		left: -10px;
		display: grid;
		/* gap: 5px; */
		grid-template-rows: 1fr 1fr;
		overflow-x: hidden;

		.first-row {
			position: relative;
			left: -30px;
		}
	}

	.badge {
		display: inline-block;
		margin: 0px 3px;
		width: 60px;
		height: 60px;
		border: 1px solid var(--secondary-fg);
		border-radius: 50%;
	}
`

export default ProfileCard
