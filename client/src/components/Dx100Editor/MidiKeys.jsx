import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { MidiContext } from '../../contexts/MidiContext'

const MidiKeys = ({ editorIsActive, menuIsActive }) => {
	const { midi } = useContext(MidiContext)

	const notes = {
		a: 60,
		w: 61,
		s: 62,
		e: 63,
		d: 64,
		f: 65,
		t: 66,
		g: 67,
		y: 68,
		h: 69,
		u: 70,
		j: 71,
		k: 72,
	}

	const validKeys = Object.keys(notes)

	const handleKeyDown = (e) => {
		if (
			editorIsActive &&
			!menuIsActive &&
			!e.repeat &&
			validKeys.includes(e.key)
		) {
			console.log([144, notes[e.key], 64])
			midi.send([144, notes[e.key], 64])
			// midi.send([144, notes[e.key], 64])
		}
	}

	const handleKeyUp = (e) => {
		if (
			editorIsActive &&
			!menuIsActive &&
			!e.repeat &&
			validKeys.includes(e.key)
		) {
			console.log([144, notes[e.key], 0])
			midi.send([144, notes[e.key], 0])
			// midi.send([144, note, 0])
		}
	}

	useEffect(() => {
		if (editorIsActive) {
			window.addEventListener('keydown', handleKeyDown)
			window.addEventListener('keyup', handleKeyUp)
		} else {
			window.removeEventListener('keydown', handleKeyDown)
			window.removeEventListener('keyup', handleKeyUp)
		}

		return () => {
			// all notes off CC message is '123' try with OP-1 to see decimal equivalent of CC messages
			window.removeEventListener('keydown', handleKeyDown)
			window.removeEventListener('keyup', handleKeyUp)
		}
	}, [editorIsActive, menuIsActive])

	return (
		<Container>
			<div className="row1">
				<Key>w</Key>
				<Key>e</Key>
				<div className="large space"></div>
				<Key>t</Key>
				<Key>y</Key>
				<Key>u</Key>
				<div className="xl space"></div>
				<Key className="disabled">+</Key>
			</div>
			<div className="row2">
				<Key>a</Key>
				<Key>s</Key>
				<Key>d</Key>
				<div className="space"></div>
				<Key>f</Key>
				<Key>g</Key>
				<Key>h</Key>
				<Key>j</Key>
				<div className="space"></div>
				<Key>k</Key>
				<div className="space"></div>
				<Key className="disabled">-</Key>
			</div>
		</Container>
	)
}

const Container = styled.div`
	display: grid;
	grid-template-rows: 1fr 1fr;
	padding: 1px 0px 10px 33px;

	.space {
		display: inline-block;
		width: 1ch;
	}

	.large {
		width: 34px;
	}

	.xl {
		width: 56px;
	}
	.row1 {
		position: relative;
		left: 12px;
	}
`

const Key = styled.div`
	display: inline-block;
	border: 1px solid var(--fm-status-fg);
	color: var(--fm-status-fg);
	height: 20px;
	width: 20px;
	text-align: center;
	padding-top: 2px;
	margin: 1px 2px;
	border-radius: 50%;
	font-size: 0.8rem;

	&.disabled {
		opacity: 0.4;
	}
`

export default MidiKeys
