type Props = {
	operator: string
}

const OpPanel = ({ operator }: Props) => {
	const heading = operator.toUpperCase()

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="260"
			height="420"
			fill="none"
			viewBox="0 0 260 420">
			<g fill="var(--fm-header-bg)">
				<path d="M0 0h260v44H0z" />
				<path d="M0 42h260v191H0zm0 191h260v187H0z" />
			</g>
			<path fill="var(--fm-panel-bg)" d="M0 44h260v187H0zm0 189h260v187H0z" />
			<path
				fill="var(--fm-typography)"
				d="M12 195h178v2H12zm0-10h178v2H12zm0-10h178v2H12zm0-11h178v2H12zm0-10h178v2H12zm0-10h178v2H12zm0-10h178v2H12zm0-10h178v2H12zm0-10h178v2H12zm0-10h178v2H12zm0-10h178v2H12zm196 101h40v2h-40zm0-10h40v2h-40zm0-10h40v2h-40zm0-11h40v2h-40zm0-10h40v2h-40zm0-10h40v2h-40zm0-10h40v2h-40zm0-10h40v2h-40zm0-10h40v2h-40zm0-10h40v2h-40zm0-10h40v2h-40zm-10-16h2v137h-2zM12 384h138v2H12zm0-10h138v2H12zm0-10h138v2H12zm0-11h138v2H12zm0-10h138v2H12zm0-10h138v2H12zm0-10h138v2H12zm0-10h138v2H12zm0-10h138v2H12zm0-10h138v2H12zm0-10h138v2H12z"
			/>
			<path
				fill="var(--fm-slider-path)"
				d="M30 74h22v145H30zm40 0h22v145H70V74Zm40 0h22v145h-22zm40 0h22v145h-22zm58 0h22v145h-22zM30 263h22v145H30zm40 0h22v145H70V263Zm40 0h22v145h-22z"
			/>
			<path
				fill="var(--fm-typography)"
				d="M208 323h40v2h-40zm0-20h40v2h-40zm32.7-6.25c.773 0 1.363.27 1.77.81.36.467.54 1.1.54 1.9 0 .893-.233 1.573-.7 2.04-.4.407-.94.61-1.62.61-.787 0-1.387-.263-1.8-.79-.36-.46-.54-1.08-.54-1.86 0-.907.237-1.603.71-2.09.407-.413.953-.62 1.64-.62Zm0 .75c-.467 0-.833.177-1.1.53-.267.347-.4.823-.4 1.43 0 .633.15 1.117.45 1.45.26.293.607.44 1.04.44.46 0 .817-.167 1.07-.5.26-.333.39-.797.39-1.39 0-.653-.147-1.153-.44-1.5-.253-.307-.59-.46-1.01-.46Zm3.449-.64h.76v.87c.413-.653.98-.98 1.7-.98.5 0 .897.127 1.19.38.293.247.44.58.44 1V302h-.81v-3.54c0-.307-.097-.55-.29-.73-.187-.18-.443-.27-.77-.27-.427 0-.767.157-1.02.47-.253.313-.38.73-.38 1.25V302h-.82v-5.14Zm-82.469 3h.76v.94c.3-.707.773-1.06 1.42-1.06.08 0 .177.01.29.03v.84c-.533.007-.9.083-1.1.23-.367.267-.55.763-.55 1.49V305h-.82v-5.14Zm7.841 4.45v.66c-.226.08-.403.12-.53.12-.533 0-.823-.243-.87-.73-.366.5-.95.75-1.75.75-.553 0-.983-.153-1.29-.46-.266-.267-.4-.61-.4-1.03 0-.48.17-.85.51-1.11.194-.147.597-.29 1.21-.43l1.68-.38.01-.43c0-.513-.386-.77-1.16-.77-.74 0-1.136.3-1.19.9h-.83c.02-.453.134-.8.34-1.04.354-.407.927-.61 1.72-.61 1.287 0 1.93.467 1.93 1.4v2.87c0 .253.11.38.33.38.027 0 .097-.02.21-.06.04-.013.067-.023.08-.03Zm-1.43-1.94-1.32.34c-.473.12-.8.243-.98.37-.173.127-.26.303-.26.53 0 .527.34.79 1.02.79.48 0 .887-.157 1.22-.47.214-.193.32-.413.32-.66v-.9Zm4.339-2.51v.66h-1.05v3.42c0 .12.04.223.12.31.087.08.197.12.33.12.127 0 .32-.03.58-.09l.09.72c-.413.073-.726.11-.94.11-.66 0-.99-.27-.99-.81v-3.78h-.7v-.66h.7v-1.05l.81-.37v1.42h1.05Zm5.299 2.81h-3.79c.007.44.1.79.28 1.05.287.42.7.63 1.24.63.667 0 1.117-.317 1.35-.95h.82c-.106.54-.353.96-.74 1.26-.386.3-.873.45-1.46.45-.78 0-1.376-.267-1.79-.8-.366-.467-.55-1.083-.55-1.85 0-.887.24-1.577.72-2.07.42-.427.964-.64 1.63-.64.487 0 .914.117 1.28.35.374.233.64.553.8.96.14.347.21.873.21 1.58v.03Zm-.88-.67c0-.447-.133-.807-.4-1.08-.26-.28-.596-.42-1.01-.42-.42 0-.763.137-1.03.41-.26.267-.406.63-.44 1.09h2.88Zm3.641 27.84V337h-.82v-7.16h.82Zm5.718 4.83h-3.79c.006.44.1.79.28 1.05.286.42.7.63 1.24.63.666 0 1.116-.317 1.35-.95h.82c-.107.54-.354.96-.74 1.26-.387.3-.874.45-1.46.45-.78 0-1.377-.267-1.79-.8-.367-.467-.55-1.083-.55-1.85 0-.887.24-1.577.72-2.07.42-.427.963-.64 1.63-.64.486 0 .913.117 1.28.35.373.233.64.553.8.96.14.347.21.873.21 1.58v.03Zm-.88-.67c0-.447-.134-.807-.4-1.08-.26-.28-.597-.42-1.01-.42-.42 0-.764.137-1.03.41-.26.267-.407.63-.44 1.09h2.88Zm4.109 3h-.89l-1.81-5.14h.93l1.36 4.16 1.46-4.16h.92l-1.97 5.14Zm7.142-2.33h-3.79c.006.44.1.79.28 1.05.286.42.7.63 1.24.63.666 0 1.116-.317 1.35-.95h.82c-.107.54-.354.96-.74 1.26-.387.3-.874.45-1.46.45-.78 0-1.377-.267-1.79-.8-.367-.467-.55-1.083-.55-1.85 0-.887.24-1.577.72-2.07.42-.427.963-.64 1.63-.64.486 0 .913.117 1.28.35.373.233.64.553.8.96.14.347.21.873.21 1.58v.03Zm-.88-.67c0-.447-.134-.807-.4-1.08-.26-.28-.597-.42-1.01-.42-.42 0-.764.137-1.03.41-.26.267-.407.63-.44 1.09h2.88Zm2.799-4.16V337h-.82v-7.16h.82Zm42.202-13.09c.773 0 1.363.27 1.77.81.36.467.54 1.1.54 1.9 0 .893-.233 1.573-.7 2.04-.4.407-.94.61-1.62.61-.787 0-1.387-.263-1.8-.79-.36-.46-.54-1.08-.54-1.86 0-.907.237-1.603.71-2.09.407-.413.953-.62 1.64-.62Zm0 .75c-.467 0-.833.177-1.1.53-.267.347-.4.823-.4 1.43 0 .633.15 1.117.45 1.45.26.293.607.44 1.04.44.46 0 .817-.167 1.07-.5.26-.333.39-.797.39-1.39 0-.653-.147-1.153-.44-1.5-.253-.307-.59-.46-1.01-.46Zm5.289-.64v.66h-.85V322h-.81v-4.48h-.69v-.66h.69v-.88c0-.367.103-.653.31-.86.213-.207.51-.31.89-.31.147 0 .3.017.46.05v.68h-.09c-.073-.007-.137-.01-.19-.01-.38 0-.57.173-.57.52v.81h.85Zm2.734 0v.66h-.85V322h-.81v-4.48h-.69v-.66h.69v-.88c0-.367.104-.653.31-.86.214-.207.51-.31.89-.31.147 0 .3.017.46.05v.68h-.09c-.073-.007-.136-.01-.19-.01-.38 0-.57.173-.57.52v.81h.85Z"
			/>
			<path fill="var(--fm-slider-path)" d="M208 282h22v64h-22z" />
			<path
				fill="var(--fm-typography)"
				d="M12.69 276.86h.76v.74c.4-.567.9267-.85 1.58-.85.6333 0 1.0933.253 1.38.76.2467-.287.4833-.483.71-.59.2333-.113.52-.17.86-.17 1 0 1.5.47 1.5 1.41V282h-.82v-3.52c0-.68-.32-1.02-.96-1.02-.3333 0-.6167.13-.85.39-.2333.26-.35.57-.35.93V282h-.82v-3.52c0-.68-.3167-1.02-.95-1.02-.34 0-.63.13-.87.39-.2333.253-.35.563-.35.93V282h-.82v-5.14Zm12.7436 4.45v.66c-.2267.08-.4033.12-.53.12-.5333 0-.8233-.243-.87-.73-.3667.5-.95.75-1.75.75-.5533 0-.9833-.153-1.29-.46-.2667-.267-.4-.61-.4-1.03 0-.48.17-.85.51-1.11.1933-.147.5967-.29 1.21-.43l1.68-.38.01-.43c0-.513-.3867-.77-1.16-.77-.74 0-1.1367.3-1.19.9h-.83c.02-.453.1333-.8.34-1.04.3533-.407.9267-.61 1.72-.61 1.2867 0 1.93.467 1.93 1.4v2.87c0 .253.11.38.33.38.0267 0 .0967-.02.21-.06.04-.013.0667-.023.08-.03Zm-1.43-1.94-1.32.34c-.4733.12-.8.243-.98.37-.1733.127-.26.303-.26.53 0 .527.34.79 1.02.79.48 0 .8867-.157 1.22-.47.2133-.193.32-.413.32-.66v-.9Zm4.509-.03 1.78 2.66h-.95l-1.29-1.98-1.31 1.98h-.93l1.82-2.62-1.73-2.52h.94l1.24 1.86 1.24-1.86h.92l-1.73 2.48Zm43.2824-30.05v.99H70.52V257h-1.215v-6.72H68.27v-.99h1.035v-1.32c0-.55.155-.98.465-1.29.32-.31.765-.465 1.335-.465.22 0 .45.025.69.075v1.02h-.135c-.11-.01-.205-.015-.285-.015-.57 0-.855.26-.855.78v1.215h1.275Zm1.3266 0h1.14v1.41c.45-1.06 1.16-1.59 2.13-1.59.12 0 .265.015.435.045v1.26c-.8.01-1.35.125-1.65.345-.55.4-.825 1.145-.825 2.235V257h-1.23v-7.71Zm11.4322 4.215h-5.685c.01.66.15 1.185.42 1.575.43.63 1.05.945 1.86.945 1 0 1.675-.475 2.025-1.425h1.23c-.16.81-.53 1.44-1.11 1.89-.58.45-1.31.675-2.19.675-1.17 0-2.065-.4-2.685-1.2-.55-.7-.825-1.625-.825-2.775 0-1.33.36-2.365 1.08-3.105.63-.64 1.445-.96 2.445-.96.73 0 1.37.175 1.92.525.56.35.96.83 1.2 1.44.21.52.315 1.31.315 2.37v.045Zm-1.32-1.005c0-.67-.2-1.21-.6-1.62-.39-.42-.895-.63-1.515-.63-.63 0-1.145.205-1.545.615-.39.4-.61.945-.66 1.635h4.32Zm9.2685 7.71h-1.23v-4.215c-.55.78-1.34 1.17-2.37 1.17-1.1 0-1.95-.39-2.55-1.17-.51-.69-.765-1.595-.765-2.715 0-1.35.345-2.41 1.035-3.18.6-.66 1.375-.99 2.325-.99 1.05 0 1.87.415 2.46 1.245v-1.065h1.095v10.92Zm-3.39-9.945c-.67 0-1.215.27-1.635.81-.41.53-.615 1.235-.615 2.115 0 .91.235 1.625.705 2.145.4.45.92.675 1.56.675.65 0 1.17-.255 1.56-.765.39-.51.585-1.195.585-2.055 0-.95-.22-1.695-.66-2.235-.39-.46-.89-.69-1.5-.69Zm-55.0623-1.14c1.16 0 2.045.405 2.655 1.215.54.7.81 1.65.81 2.85 0 1.34-.35 2.36-1.05 3.06-.6.61-1.41.915-2.43.915-1.18 0-2.08-.395-2.7-1.185-.54-.69-.81-1.62-.81-2.79 0-1.36.355-2.405 1.065-3.135.61-.62 1.43-.93 2.46-.93Zm0 1.125c-.7 0-1.25.265-1.65.795-.4.52-.6 1.235-.6 2.145 0 .95.225 1.675.675 2.175.39.44.91.66 1.56.66.69 0 1.225-.25 1.605-.75.39-.5.585-1.195.585-2.085 0-.98-.22-1.73-.66-2.25-.38-.46-.885-.69-1.515-.69ZM45.2835 257h-1.215v-1.215c-.55.92-1.37 1.38-2.46 1.38-.75 0-1.35-.185-1.8-.555-.44-.38-.66-.885-.66-1.515v-5.805h1.215v5.31c0 .45.145.81.435 1.08.29.27.68.405 1.17.405.64 0 1.15-.23 1.53-.69.38-.47.57-1.1.57-1.89v-4.215h1.215V257Zm5.1435-7.71v.99h-1.575v5.13c0 .18.06.335.18.465.13.12.295.18.495.18.19 0 .48-.045.87-.135l.135 1.08c-.62.11-1.09.165-1.41.165-.99 0-1.485-.405-1.485-1.215v-5.67h-1.05v-.99h1.05v-1.575l1.215-.555v2.13h1.575Zm66.878-3.03V257h-1.23v-1.065c-.49.83-1.25 1.245-2.28 1.245-1.13 0-2-.41-2.61-1.23-.53-.72-.795-1.67-.795-2.85 0-1.29.345-2.3 1.035-3.03.59-.63 1.355-.945 2.295-.945 1.04 0 1.825.39 2.355 1.17v-4.035h1.23Zm-3.375 4.005c-.68 0-1.23.27-1.65.81-.41.53-.615 1.235-.615 2.115 0 .91.24 1.625.72 2.145.41.46.93.69 1.56.69.65 0 1.165-.255 1.545-.765.39-.51.585-1.2.585-2.07 0-.95-.22-1.69-.66-2.22-.39-.47-.885-.705-1.485-.705Zm11.803 3.24h-5.685c.01.66.15 1.185.42 1.575.43.63 1.05.945 1.86.945 1 0 1.675-.475 2.025-1.425h1.23c-.16.81-.53 1.44-1.11 1.89-.58.45-1.31.675-2.19.675-1.17 0-2.065-.4-2.685-1.2-.55-.7-.825-1.625-.825-2.775 0-1.33.36-2.365 1.08-3.105.63-.64 1.445-.96 2.445-.96.73 0 1.37.175 1.92.525.56.35.96.83 1.2 1.44.21.52.315 1.31.315 2.37v.045Zm-1.32-1.005c0-.67-.2-1.21-.6-1.62-.39-.42-.895-.63-1.515-.63-.63 0-1.145.205-1.545.615-.39.4-.61.945-.66 1.635h4.32Zm6.014-3.21v.99h-1.575v5.13c0 .18.06.335.18.465.13.12.295.18.495.18.19 0 .48-.045.87-.135l.135 1.08c-.62.11-1.09.165-1.41.165-.99 0-1.485-.405-1.485-1.215v-5.67h-1.05v-.99h1.05v-1.575l1.215-.555v2.13h1.575Zm27.083 2.115h-1.35c-.04-.77-.555-1.155-1.545-1.155-.51 0-.915.1-1.215.3-.29.19-.435.45-.435.78 0 .5.475.86 1.425 1.08l1.185.27c.77.18 1.325.435 1.665.765.34.33.51.78.51 1.35 0 .73-.285 1.31-.855 1.74-.57.42-1.34.63-2.31.63-1.06 0-1.865-.25-2.415-.75-.46-.41-.705-.955-.735-1.635h1.395c.08.35.19.605.33.765.27.32.775.48 1.515.48.55 0 .985-.1 1.305-.3.33-.21.495-.485.495-.825 0-.51-.395-.86-1.185-1.05l-1.155-.27c-.88-.21-1.495-.46-1.845-.75-.4-.33-.6-.805-.6-1.425 0-.7.265-1.255.795-1.665.54-.41 1.26-.615 2.16-.615.94 0 1.67.235 2.19.705.45.41.675.935.675 1.575Zm7.788.465h-1.23c-.15-1.08-.76-1.62-1.83-1.62-.67 0-1.195.265-1.575.795-.38.53-.57 1.265-.57 2.205 0 .93.225 1.64.675 2.13.38.43.89.645 1.53.645 1.03 0 1.645-.56 1.845-1.68h1.245c-.08.96-.425 1.685-1.035 2.175-.53.43-1.225.645-2.085.645-1.13 0-2.01-.4-2.64-1.2-.54-.69-.81-1.595-.81-2.715 0-1.34.355-2.39 1.065-3.15.61-.65 1.4-.975 2.37-.975 1.12 0 1.96.375 2.52 1.125.29.39.465.93.525 1.62Zm8.313 4.095v.99c-.34.12-.605.18-.795.18-.8 0-1.235-.365-1.305-1.095-.55.75-1.425 1.125-2.625 1.125-.83 0-1.475-.23-1.935-.69-.4-.4-.6-.915-.6-1.545 0-.72.255-1.275.765-1.665.29-.22.895-.435 1.815-.645l2.52-.57.015-.645c0-.77-.58-1.155-1.74-1.155-1.11 0-1.705.45-1.785 1.35h-1.245c.03-.68.2-1.2.51-1.56.53-.61 1.39-.915 2.58-.915 1.93 0 2.895.7 2.895 2.1v4.305c0 .38.165.57.495.57.04 0 .145-.03.315-.09.06-.02.1-.035.12-.045Zm-2.145-2.91-1.98.51c-.71.18-1.2.365-1.47.555-.26.19-.39.455-.39.795 0 .79.51 1.185 1.53 1.185.72 0 1.33-.235 1.83-.705.32-.29.48-.62.48-.99v-1.35Zm4.694-6.795V257h-1.23v-10.74h1.23Zm8.576 7.245h-5.685c.01.66.15 1.185.42 1.575.43.63 1.05.945 1.86.945 1 0 1.675-.475 2.025-1.425h1.23c-.16.81-.53 1.44-1.11 1.89-.58.45-1.31.675-2.19.675-1.17 0-2.065-.4-2.685-1.2-.55-.7-.825-1.625-.825-2.775 0-1.33.36-2.365 1.08-3.105.63-.64 1.445-.96 2.445-.96.73 0 1.37.175 1.92.525.56.35.96.83 1.2 1.44.21.52.315 1.31.315 2.37v.045Zm-1.32-1.005c0-.67-.2-1.21-.6-1.62-.39-.42-.895-.63-1.515-.63-.63 0-1.145.205-1.545.615-.39.4-.61.945-.66 1.635h4.32Zm28.459 3.465v.99c-.34.12-.605.18-.795.18-.8 0-1.235-.365-1.305-1.095-.55.75-1.425 1.125-2.625 1.125-.83 0-1.475-.23-1.935-.69-.4-.4-.6-.915-.6-1.545 0-.72.255-1.275.765-1.665.29-.22.895-.435 1.815-.645l2.52-.57.015-.645c0-.77-.58-1.155-1.74-1.155-1.11 0-1.705.45-1.785 1.35h-1.245c.03-.68.2-1.2.51-1.56.53-.61 1.39-.915 2.58-.915 1.93 0 2.895.7 2.895 2.1v4.305c0 .38.165.57.495.57.04 0 .145-.03.315-.09.06-.02.1-.035.12-.045Zm-2.145-2.91-1.98.51c-.71.18-1.2.365-1.47.555-.26.19-.39.455-.39.795 0 .79.51 1.185 1.53 1.185.72 0 1.33-.235 1.83-.705.32-.29.48-.62.48-.99v-1.35Zm3.493-3.765h1.14v1.11c.6-.85 1.39-1.275 2.37-1.275.95 0 1.64.38 2.07 1.14.37-.43.725-.725 1.065-.885.35-.17.78-.255 1.29-.255 1.5 0 2.25.705 2.25 2.115V257h-1.23v-5.28c0-1.02-.48-1.53-1.44-1.53-.5 0-.925.195-1.275.585-.35.39-.525.855-.525 1.395V257h-1.23v-5.28c0-1.02-.475-1.53-1.425-1.53-.51 0-.945.195-1.305.585-.35.38-.525.845-.525 1.395V257h-1.23v-7.71Zm12.036 10.92v-10.92h1.14v1.185c.57-.9 1.39-1.35 2.46-1.35 1.09 0 1.93.42 2.52 1.26.52.73.78 1.69.78 2.88 0 1.27-.34 2.26-1.02 2.97-.59.62-1.355.93-2.295.93-.95 0-1.735-.345-2.355-1.035v4.08h-1.23Zm3.39-9.945c-.65 0-1.175.265-1.575.795-.39.53-.585 1.24-.585 2.13 0 .92.225 1.64.675 2.16.38.44.875.66 1.485.66.68 0 1.22-.255 1.62-.765.41-.52.615-1.205.615-2.055 0-.94-.23-1.68-.69-2.22-.41-.47-.925-.705-1.545-.705Zm-23.614 16.025h1.14v1.11c.6-.85 1.39-1.275 2.37-1.275.95 0 1.64.38 2.07 1.14.37-.43.725-.725 1.065-.885.35-.17.78-.255 1.29-.255 1.5 0 2.25.705 2.25 2.115V274h-1.23v-5.28c0-1.02-.48-1.53-1.44-1.53-.5 0-.925.195-1.275.585-.35.39-.525.855-.525 1.395V274h-1.23v-5.28c0-1.02-.475-1.53-1.425-1.53-.51 0-.945.195-1.305.585-.35.38-.525.845-.525 1.395V274h-1.23v-7.71Zm15.29-.165c1.16 0 2.045.405 2.655 1.215.54.7.81 1.65.81 2.85 0 1.34-.35 2.36-1.05 3.06-.6.61-1.41.915-2.43.915-1.18 0-2.08-.395-2.7-1.185-.54-.69-.81-1.62-.81-2.79 0-1.36.355-2.405 1.065-3.135.61-.62 1.43-.93 2.46-.93Zm0 1.125c-.7 0-1.25.265-1.65.795-.4.52-.6 1.235-.6 2.145 0 .95.225 1.675.675 2.175.39.44.91.66 1.56.66.69 0 1.225-.25 1.605-.75.39-.5.585-1.195.585-2.085 0-.98-.22-1.73-.66-2.25-.38-.46-.885-.69-1.515-.69Zm11.444-3.99V274h-1.23v-1.065c-.49.83-1.25 1.245-2.28 1.245-1.13 0-2-.41-2.61-1.23-.53-.72-.795-1.67-.795-2.85 0-1.29.345-2.3 1.035-3.03.59-.63 1.355-.945 2.295-.945 1.04 0 1.825.39 2.355 1.17v-4.035h1.23Zm-3.375 4.005c-.68 0-1.23.27-1.65.81-.41.53-.615 1.235-.615 2.115 0 .91.24 1.625.72 2.145.41.46.93.69 1.56.69.65 0 1.165-.255 1.545-.765.39-.51.585-1.2.585-2.07 0-.95-.22-1.69-.66-2.22-.39-.47-.885-.705-1.485-.705Zm-10.037 89.24h-5.685c.01.66.15 1.185.42 1.575.43.63 1.05.945 1.86.945 1 0 1.675-.475 2.025-1.425h1.23c-.16.81-.53 1.44-1.11 1.89-.58.45-1.31.675-2.19.675-1.17 0-2.065-.4-2.685-1.2-.55-.7-.825-1.625-.825-2.775 0-1.33.36-2.365 1.08-3.105.63-.64 1.445-.96 2.445-.96.73 0 1.37.175 1.92.525.56.35.96.83 1.2 1.44.21.52.315 1.31.315 2.37v.045Zm-1.32-1.005c0-.67-.2-1.21-.6-1.62-.39-.42-.895-.63-1.515-.63-.63 0-1.145.205-1.545.615-.39.4-.61.945-.66 1.635h4.32Zm8.023-3.21h1.14v6.45c0 1.67-.27 2.83-.81 3.48-.54.66-1.425.99-2.655.99-.96 0-1.71-.23-2.25-.69-.48-.41-.75-.955-.81-1.635h1.26c.06.4.21.695.45.885.35.27.82.405 1.41.405.8 0 1.37-.24 1.71-.72.29-.41.435-1.11.435-2.1v-.495c-.64.87-1.41 1.305-2.31 1.305-.88 0-1.625-.33-2.235-.99-.65-.71-.975-1.68-.975-2.91 0-1.32.34-2.37 1.02-3.15.6-.66 1.355-.99 2.265-.99.98 0 1.765.44 2.355 1.32v-1.155Zm-2.22.96c-.66 0-1.185.265-1.575.795-.38.52-.57 1.235-.57 2.145 0 .95.22 1.675.66 2.175.37.44.87.66 1.5.66.66 0 1.17-.25 1.53-.75.37-.5.555-1.195.555-2.085 0-.98-.21-1.73-.63-2.25-.37-.46-.86-.69-1.47-.69Zm-16.551 13.01h1.215v4.065c.57-.8 1.37-1.2 2.4-1.2 1.09 0 1.93.4 2.52 1.2.52.7.78 1.625.78 2.775 0 1.33-.345 2.365-1.035 3.105-.6.64-1.375.96-2.325.96-1.07 0-1.885-.405-2.445-1.215V377h-1.11v-10.74Zm3.39 4.005c-.66 0-1.19.27-1.59.81-.39.53-.585 1.235-.585 2.115 0 .92.225 1.64.675 2.16.39.44.89.66 1.5.66.68 0 1.22-.255 1.62-.765.41-.51.615-1.195.615-2.055 0-.94-.23-1.68-.69-2.22-.4-.47-.915-.705-1.545-.705Zm6.194-.975V377h-1.215v-7.71h1.215Zm-.585-3.015c.21 0 .385.075.525.225.15.14.225.31.225.51 0 .21-.075.39-.225.54-.14.14-.315.21-.525.21-.2 0-.375-.07-.525-.21-.14-.15-.21-.33-.21-.54 0-.2.07-.37.21-.51.15-.15.325-.225.525-.225Zm9.536 9.69v.99c-.34.12-.605.18-.795.18-.8 0-1.235-.365-1.305-1.095-.55.75-1.425 1.125-2.625 1.125-.83 0-1.475-.23-1.935-.69-.4-.4-.6-.915-.6-1.545 0-.72.255-1.275.765-1.665.29-.22.895-.435 1.815-.645l2.52-.57.015-.645c0-.77-.58-1.155-1.74-1.155-1.11 0-1.705.45-1.785 1.35h-1.245c.03-.68.2-1.2.51-1.56.53-.61 1.39-.915 2.58-.915 1.93 0 2.895.7 2.895 2.1v4.305c0 .38.165.57.495.57.04 0 .145-.03.315-.09.06-.02.1-.035.12-.045Zm-2.145-2.91-1.98.51c-.71.18-1.2.365-1.47.555-.26.19-.39.455-.39.795 0 .79.51 1.185 1.53 1.185.72 0 1.33-.235 1.83-.705.32-.29.48-.62.48-.99v-1.35Zm8.969-1.65h-1.35c-.04-.77-.555-1.155-1.545-1.155-.51 0-.915.1-1.215.3-.29.19-.435.45-.435.78 0 .5.475.86 1.425 1.08l1.185.27c.77.18 1.325.435 1.665.765.34.33.51.78.51 1.35 0 .73-.285 1.31-.855 1.74-.57.42-1.34.63-2.31.63-1.06 0-1.865-.25-2.415-.75-.46-.41-.705-.955-.735-1.635h1.395c.08.35.19.605.33.765.27.32.775.48 1.515.48.55 0 .985-.1 1.305-.3.33-.21.495-.485.495-.825 0-.51-.395-.86-1.185-1.05l-1.155-.27c-.88-.21-1.495-.46-1.845-.75-.4-.33-.6-.805-.6-1.425 0-.7.265-1.255.795-1.665.54-.41 1.26-.615 2.16-.615.94 0 1.67.235 2.19.705.45.41.675.935.675 1.575Zm-62.54-22.145v6.3l3.27-3.27h1.59l-2.685 2.655 3.15 5.055h-1.515l-2.61-4.185-1.2 1.17V360h-1.215v-10.74h1.215Zm12.843 7.245h-5.685c.01.66.15 1.185.42 1.575.43.63 1.05.945 1.86.945 1 0 1.675-.475 2.025-1.425h1.23c-.16.81-.53 1.44-1.11 1.89-.58.45-1.31.675-2.19.675-1.17 0-2.065-.4-2.685-1.2-.55-.7-.825-1.625-.825-2.775 0-1.33.36-2.365 1.08-3.105.63-.64 1.445-.96 2.445-.96.73 0 1.37.175 1.92.525.56.35.96.83 1.2 1.44.21.52.315 1.31.315 2.37v.045Zm-1.32-1.005c0-.67-.2-1.21-.6-1.62-.39-.42-.895-.63-1.515-.63-.63 0-1.145.205-1.545.615-.39.4-.61.945-.66 1.635h4.32Zm7.693-3.21h1.32l-3.435 9.33c-.4 1.06-1.065 1.59-1.995 1.59-.44 0-.825-.1-1.155-.3l.24-1.065c.25.1.495.15.735.15.48 0 .815-.25 1.005-.75l.465-1.23-2.61-7.725h1.32l1.965 6 2.145-6ZM173.288 377h-1.335l-2.715-7.71h1.395l2.04 6.24 2.19-6.24h1.38l-2.955 7.71Zm10.714-3.495h-5.685c.01.66.15 1.185.42 1.575.43.63 1.05.945 1.86.945 1 0 1.675-.475 2.025-1.425h1.23c-.16.81-.53 1.44-1.11 1.89-.58.45-1.31.675-2.19.675-1.17 0-2.065-.4-2.685-1.2-.55-.7-.825-1.625-.825-2.775 0-1.33.36-2.365 1.08-3.105.63-.64 1.445-.96 2.445-.96.73 0 1.37.175 1.92.525.56.35.96.83 1.2 1.44.21.52.315 1.31.315 2.37v.045Zm-1.32-1.005c0-.67-.2-1.21-.6-1.62-.39-.42-.895-.63-1.515-.63-.63 0-1.145.205-1.545.615-.39.4-.61.945-.66 1.635h4.32Zm4.198-6.24V377h-1.23v-10.74h1.23Zm-173.19 22.6h.76v.74c.4-.567.9267-.85 1.58-.85.6333 0 1.0933.253 1.38.76.2467-.287.4833-.483.71-.59.2333-.113.52-.17.86-.17 1 0 1.5.47 1.5 1.41V394h-.82v-3.52c0-.68-.32-1.02-.96-1.02-.3333 0-.6167.13-.85.39-.2333.26-.35.57-.35.93V394h-.82v-3.52c0-.68-.3167-1.02-.95-1.02-.34 0-.63.13-.87.39-.2333.253-.35.563-.35.93V394h-.82v-5.14Zm8.9536 0V394h-.81v-5.14h.81Zm-.39-2.01c.14 0 .2567.05.35.15.1.093.15.207.15.34 0 .14-.05.26-.15.36-.0933.093-.21.14-.35.14-.1333 0-.25-.047-.35-.14-.0933-.1-.14-.22-.14-.36 0-.133.0467-.247.14-.34.1-.1.2167-.15.35-.15Zm1.7977 2.01h.76v.87c.4134-.653.98-.98 1.7-.98.5 0 .8967.127 1.19.38.2934.247.44.58.44 1V394h-.81v-3.54c0-.307-.0966-.55-.29-.73-.1866-.18-.4433-.27-.77-.27-.4266 0-.7666.157-1.02.47-.2533.313-.38.73-.38 1.25V394h-.82v-5.14ZM12.69 87.86h.76v.74c.4-.5667.9267-.85 1.58-.85.6333 0 1.0933.2533 1.38.76.2467-.2867.4833-.4833.71-.59.2333-.1133.52-.17.86-.17 1 0 1.5.47 1.5 1.41V93h-.82v-3.52c0-.68-.32-1.02-.96-1.02-.3333 0-.6167.13-.85.39-.2333.26-.35.57-.35.93V93h-.82v-3.52c0-.68-.3167-1.02-.95-1.02-.34 0-.63.13-.87.39-.2333.2533-.35.5633-.35.93V93h-.82v-5.14Zm12.7436 4.45v.66c-.2267.08-.4033.12-.53.12-.5333 0-.8233-.2433-.87-.73-.3667.5-.95.75-1.75.75-.5533 0-.9833-.1533-1.29-.46-.2667-.2667-.4-.61-.4-1.03 0-.48.17-.85.51-1.11.1933-.1467.5967-.29 1.21-.43l1.68-.38.01-.43c0-.5133-.3867-.77-1.16-.77-.74 0-1.1367.3-1.19.9h-.83c.02-.4533.1333-.8.34-1.04.3533-.4067.9267-.61 1.72-.61 1.2867 0 1.93.4667 1.93 1.4v2.87c0 .2533.11.38.33.38.0267 0 .0967-.02.21-.06.04-.0133.0667-.0233.08-.03Zm-1.43-1.94-1.32.34c-.4733.12-.8.2433-.98.37-.1733.1267-.26.3033-.26.53 0 .5267.34.79 1.02.79.48 0 .8867-.1567 1.22-.47.2133-.1933.32-.4133.32-.66v-.9Zm4.509-.03 1.78 2.66h-.95l-1.29-1.98-1.31 1.98h-.93l1.82-2.62-1.73-2.52h.94l1.24 1.86 1.24-1.86h.92l-1.73 2.48ZM78.305 57.26V68h-1.23v-1.065c-.49.83-1.25 1.245-2.28 1.245-1.13 0-2-.41-2.61-1.23-.53-.72-.795-1.67-.795-2.85 0-1.29.345-2.3 1.035-3.03.59-.63 1.355-.945 2.295-.945 1.04 0 1.825.39 2.355 1.17V57.26h1.23Zm-3.375 4.005c-.68 0-1.23.27-1.65.81-.41.53-.615 1.235-.615 2.115 0 .91.24 1.625.72 2.145.41.46.93.69 1.56.69.65 0 1.165-.255 1.545-.765.39-.51.585-1.2.585-2.07 0-.95-.22-1.69-.66-2.22-.39-.47-.885-.705-1.485-.705Zm8.5485-4.005v10.17l-.645.57h-.63v-9.21l-1.86 1.56-.675-.84 2.67-2.25h1.14Zm2.062 3.03h1.14v1.41c.45-1.06 1.16-1.59 2.13-1.59.12 0 .265.015.435.045v1.26c-.8.01-1.35.125-1.65.345-.55.4-.825 1.145-.825 2.235V68h-1.23v-7.71ZM41.875 66.965v.99c-.34.12-.605.18-.795.18-.8 0-1.235-.365-1.305-1.095-.55.75-1.425 1.125-2.625 1.125-.83 0-1.475-.23-1.935-.69-.4-.4-.6-.915-.6-1.545 0-.72.255-1.275.765-1.665.29-.22.895-.435 1.815-.645l2.52-.57.015-.645c0-.77-.58-1.155-1.74-1.155-1.11 0-1.705.45-1.785 1.35H34.96c.03-.68.2-1.2.51-1.56.53-.61 1.39-.915 2.58-.915 1.93 0 2.895.7 2.895 2.1v4.305c0 .38.165.57.495.57.04 0 .145-.03.315-.09.06-.02.1-.035.12-.045Zm-2.145-2.91-1.98.51c-.71.18-1.2.365-1.47.555-.26.19-.39.455-.39.795 0 .79.51 1.185 1.53 1.185.72 0 1.33-.235 1.83-.705.32-.29.48-.62.48-.99v-1.35Zm3.4785-3.765h1.14v1.41c.45-1.06 1.16-1.59 2.13-1.59.12 0 .265.015.435.045v1.26c-.8.01-1.35.125-1.65.345-.55.4-.825 1.145-.825 2.235V68h-1.23v-7.71Zm74.0965-3.03V68h-1.23v-1.065c-.49.83-1.25 1.245-2.28 1.245-1.13 0-2-.41-2.61-1.23-.53-.72-.795-1.67-.795-2.85 0-1.29.345-2.3 1.035-3.03.59-.63 1.355-.945 2.295-.945 1.04 0 1.825.39 2.355 1.17V57.26h1.23Zm-3.375 4.005c-.68 0-1.23.27-1.65.81-.41.53-.615 1.235-.615 2.115 0 .91.24 1.625.72 2.145.41.46.93.69 1.56.69.65 0 1.165-.255 1.545-.765.39-.51.585-1.2.585-2.07 0-.95-.22-1.69-.66-2.22-.39-.47-.885-.705-1.485-.705Zm5.248-3.225c.94-.61 1.89-.915 2.85-.915.94 0 1.645.275 2.115.825.41.48.615 1.12.615 1.92 0 .63-.16 1.245-.48 1.845-.29.51-.8 1.2-1.53 2.07l-2.115 2.4-.615.75h4.92v.42l-.525.645h-5.745v-1.08l1.14-1.365 2.31-2.685c.46-.55.785-1.01.975-1.38.26-.5.39-.985.39-1.455 0-.52-.155-.94-.465-1.26-.31-.32-.725-.48-1.245-.48-.61 0-1.245.235-1.905.705l-.69-.96Zm7.267 2.25h1.14v1.41c.45-1.06 1.16-1.59 2.13-1.59.12 0 .265.015.435.045v1.26c-.8.01-1.35.125-1.65.345-.55.4-.825 1.145-.825 2.235V68h-1.23v-7.71Zm30.575 0h1.14v1.41c.45-1.06 1.16-1.59 2.13-1.59.12 0 .265.015.435.045v1.26c-.8.01-1.35.125-1.65.345-.55.4-.825 1.145-.825 2.235V68h-1.23v-7.71Zm4.907 0h1.14v1.41c.45-1.06 1.16-1.59 2.13-1.59.12 0 .265.015.435.045v1.26c-.8.01-1.35.125-1.65.345-.55.4-.825 1.145-.825 2.235V68h-1.23v-7.71Zm56.378-3.03V68h-1.23v-1.065c-.49.83-1.25 1.245-2.28 1.245-1.13 0-2-.41-2.61-1.23-.53-.72-.795-1.67-.795-2.85 0-1.29.345-2.3 1.035-3.03.59-.63 1.355-.945 2.295-.945 1.04 0 1.825.39 2.355 1.17V57.26h1.23Zm-3.375 4.005c-.68 0-1.23.27-1.65.81-.41.53-.615 1.235-.615 2.115 0 .91.24 1.625.72 2.145.41.46.93.69 1.56.69.65 0 1.165-.255 1.545-.765.39-.51.585-1.2.585-2.07 0-.95-.22-1.69-.66-2.22-.39-.47-.885-.705-1.485-.705Zm8.548-4.005v10.17l-.645.57h-.63v-9.21l-1.86 1.56-.675-.84 2.67-2.25h1.14Zm3.278 0V68h-1.23V57.26h1.23ZM13.69 199.86h.76v.74c.4-.567.9267-.85 1.58-.85.6333 0 1.0933.253 1.38.76.2467-.287.4833-.483.71-.59.2333-.113.52-.17.86-.17 1 0 1.5.47 1.5 1.41V205h-.82v-3.52c0-.68-.32-1.02-.96-1.02-.3333 0-.6167.13-.85.39-.2333.26-.35.57-.35.93V205h-.82v-3.52c0-.68-.3167-1.02-.95-1.02-.34 0-.63.13-.87.39-.2333.253-.35.563-.35.93V205h-.82v-5.14Zm8.9536 0V205h-.81v-5.14h.81Zm-.39-2.01c.14 0 .2567.05.35.15.1.093.15.207.15.34 0 .14-.05.26-.15.36-.0933.093-.21.14-.35.14-.1333 0-.25-.047-.35-.14-.0933-.1-.14-.22-.14-.36 0-.133.0467-.247.14-.34.1-.1.2167-.15.35-.15Zm1.7977 2.01h.76v.87c.4134-.653.98-.98 1.7-.98.5 0 .8967.127 1.19.38.2934.247.44.58.44 1V205h-.81v-3.54c0-.307-.0966-.55-.29-.73-.1866-.18-.4433-.27-.77-.27-.4266 0-.7666.157-1.02.47-.2533.313-.38.73-.38 1.25V205h-.82v-5.14Z"
			/>
			<g fill="var(--fm-typography)">
				<circle cx="179" cy="327" r="1" />
				<circle cx="199" cy="327" r="1" />
			</g>
			<g fill="var(--fm-typography)">
				<circle cx="168" cy="405" r="1" />
				<circle cx="188" cy="405" r="1" />
			</g>
			<g fill="var(--fm-typography)">
				<circle cx="210" cy="405" r="1" />
				<circle cx="230" cy="405" r="1" />
			</g>
			<g fill="var(--fm-typography)">
				<circle cx="159" cy="295" r="1" />
				<circle cx="179" cy="295" r="1" />
			</g>
			<text
				x="103"
				y="32"
				fill="var(--fm-header-fg)"
				fontFamily="sans-serif"
				fontSize="28">
				{heading}
			</text>
		</svg>
	)
}

export default OpPanel
