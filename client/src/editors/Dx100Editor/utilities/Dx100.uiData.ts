export type sliderSVGValues = {
	x: string
	y: string
	fill: string
	x2: string
	y2: string
	type?: string
}

export type encoderSVGValues = {
	cx: string
	cy: string
	fill: string
	cx2: string
	cy2: string
}

export const getOperatorParamSliders = (
	operator: string
): { [key: string]: sliderSVGValues } => {
	const sliders = {
		[`${operator}_det`]: {
			x: '110',
			y: '364',
			fill: 'var(--fm-slider-c)',
			x2: '110',
			y2: '383',
		},
		[`${operator}_f`]: {
			x: '70',
			y: '364',
			fill: 'var(--fm-slider-b)',
			x2: '70',
			y2: '383',
		},
		[`${operator}_out`]: {
			x: '30',
			y: '364',
			fill: 'var(--fm-slider-b)',
			x2: '30',
			y2: '383',
		},
		[`${operator}_ampmod`]: {
			x: '208',
			y: '303',
			fill: 'var(--fm-slider-c)',
			x2: '208',
			y2: '322',
			type: 'switch',
		},
		[`${operator}_d1l`]: {
			x: '208',
			y: '175',
			fill: 'var(--fm-slider-c)',
			x2: '208',
			y2: '194',
		},
		[`${operator}_rr`]: {
			x: '150',
			y: '175',
			fill: 'var(--fm-slider-a)',
			x2: '150',
			y2: '194',
		},
		[`${operator}_d2r`]: {
			x: '110',
			y: '175',
			fill: 'var(--fm-slider-a)',
			x2: '110',
			y2: '194',
		},
		[`${operator}_d1r`]: {
			x: '70',
			y: '175',
			fill: 'var(--fm-slider-a)',
			x2: '70',
			y2: '194',
		},
		[`${operator}_ar`]: {
			x: '30',
			y: '175',
			fill: 'var(--fm-slider-a)',
			x2: '30',
			y2: '194',
		},
	}
	return sliders
}

export const getOperatorParamEncoders = (
	operator: string
): { [key: string]: encoderSVGValues } => {
	const encoders = {
		[`${operator}_egb`]: {
			cx: '220',
			cy: '396',
			fill: 'var(--fm-slider-a)',
			cx2: '214.294',
			cy2: '401.607',
		},
		[`${operator}_kvs`]: {
			cx: '178',
			cy: '396',
			fill: 'var(--fm-slider-b)',
			cx2: '172.294',
			cy2: '401.607',
		},
		[`${operator}_ls`]: {
			cx: '189',
			cy: '317',
			fill: 'var(--fm-slider-c)',
			cx2: '183.294',
			cy2: '322.607',
		},
		[`${operator}_rs`]: {
			cx: '169',
			cy: '285',
			fill: 'var(--fm-slider-c)',
			cx2: '163.294',
			cy2: '290.607',
		},
	}
	return encoders
}

export const getLfoParamSliders = (): { [key: string]: sliderSVGValues } => {
	const sliders = {
		ams: {
			x: '190',
			y: '364',
			fill: 'var(--fm-slider-b)',
			x2: '190',
			y2: '383',
		},
		pm: {
			x: '190',
			y: '472',
			fill: 'var(--fm-slider-b)',
			x2: '190',
			y2: '491',
			type: 'switch',
		},
		pfw: {
			x: '190',
			y: '553',
			fill: 'var(--fm-slider-b)',
			x2: '190',
			y2: '572',
			type: 'switch',
		},
		mwa: {
			x: '230',
			y: '364',
			fill: 'var(--fm-slider-b)',
			x2: '230',
			y2: '383',
		},
		mono: {
			x: '230',
			y: '472',
			fill: 'var(--fm-slider-b)',
			x2: '230',
			y2: '491',
			type: 'switch',
		},
		sfs: {
			x: '230',
			y: '553',
			fill: 'var(--fm-slider-b)',
			x2: '230',
			y2: '572',
			type: 'switch',
		},
		amd: {
			x: '150',
			y: '364',
			fill: 'var(--fm-slider-b)',
			x2: '150',
			y2: '383',
		},
		pmt: {
			x: '150',
			y: '553',
			fill: 'var(--fm-slider-b)',
			x2: '150',
			y2: '572',
		},
		mwp: {
			x: '110',
			y: '364',
			fill: 'var(--fm-slider-a)',
			x2: '110',
			y2: '383',
		},
		pbr: {
			x: '110',
			y: '553',
			fill: 'var(--fm-slider-a)',
			x2: '110',
			y2: '572',
		},
		pms: {
			x: '70',
			y: '364',
			fill: 'var(--fm-slider-a)',
			x2: '70',
			y2: '383',
		},
		fbl: {
			x: '70',
			y: '553',
			fill: 'var(--fm-slider-a)',
			x2: '70',
			y2: '572',
		},
		pmd: {
			x: '30',
			y: '364',
			fill: 'var(--fm-slider-a)',
			x2: '30',
			y2: '383',
		},
		alg: {
			x: '30',
			y: '553',
			fill: 'var(--fm-slider-a)',
			x2: '30',
			y2: '572',
		},
		sync: {
			x: '230',
			y: '113',
			fill: 'var(--fm-slider-c)',
			x2: '230',
			y2: '132',
			type: 'switch',
		},
		lfd: {
			x: '190',
			y: '174',
			fill: 'var(--fm-slider-c)',
			x2: '190',
			y2: '193',
		},
		lfs: {
			x: '150',
			y: '174',
			fill: 'var(--fm-slider-c)',
			x2: '150',
			y2: '193',
		},
		lw: {
			x: '30',
			y: '174',
			fill: 'var(--fm-slider-c)',
			x2: '30',
			y2: '193',
			type: 'lfo',
		},
	}
	return sliders
}
