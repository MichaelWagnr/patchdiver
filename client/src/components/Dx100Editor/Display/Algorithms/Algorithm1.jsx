const Algorithm1 = ({ isActive, highlighted, transparent }) => {
	return (
		<g>
			<path
				fill="var(--fm-display-fg)"
				fillOpacity={isActive ? highlighted : transparent}
				d="M276 154h23.627v16H276v-16Zm0-24h23.627v16H276v-16Zm31.503 0h23.627v16h-23.627v-16Zm0-24h23.627v16h-23.627v-16Zm-21.658 40h3.937v8h-3.937v-8Zm31.502-24h3.938v8h-3.938v-8Zm-17.72 14h7.876v4h-7.876v-4Zm21.658-12h13.782v2h-13.782v-2Zm0-22h13.782v2h-13.782v-2Zm-1.969 0h1.969v4h-1.969v-4Zm13.782 2h1.969v20h-1.969v-20Z"
			/>
			<path
				fill="var(--fm-display-bg)"
				d="M291.498 143v-1.319h-4.635l2.215-2.366c.292-.309.561-.61.807-.902.25-.292.467-.581.649-.868.178-.287.317-.577.417-.868.105-.296.157-.602.157-.916 0-.42-.068-.802-.205-1.149-.136-.351-.335-.651-.594-.902-.265-.251-.59-.447-.978-.588-.383-.141-.818-.212-1.306-.212-.519 0-.991.084-1.415.253-.419.169-.774.397-1.066.684-.296.287-.524.624-.684 1.011-.159.383-.239.791-.239 1.224h1.641c0-.287.036-.542.109-.766.073-.227.182-.421.328-.581.142-.15.319-.266.534-.348.214-.082.467-.123.758-.123.228 0 .433.038.616.116.186.077.346.184.478.321s.232.301.301.492c.068.192.102.404.102.636 0 .173-.025.346-.075.52-.045.168-.123.351-.232.547-.114.195-.262.412-.445.649-.182.232-.407.497-.676.793l-3.241 3.527V143h6.679Zm-2.898 24v-9.953h-.103l-4.095 1.517v1.443l2.55-.937V167h1.648Zm28.809-29.715v1.285h.977c.283 0 .538.034.766.103.232.064.431.162.595.294.164.137.289.307.376.512.086.206.13.452.13.739 0 .255-.039.483-.117.683-.073.196-.18.36-.321.493-.146.141-.326.248-.54.321-.21.068-.447.102-.711.102-.246 0-.472-.036-.677-.109-.2-.073-.373-.175-.519-.308-.151-.127-.267-.282-.349-.464-.077-.187-.116-.39-.116-.609h-1.634c0 .465.089.873.267 1.224.182.346.424.638.724.875.301.237.65.414 1.046.533.397.118.809.178 1.238.178.473 0 .913-.064 1.319-.192.41-.132.766-.323 1.066-.574.297-.246.529-.549.698-.909.173-.365.259-.779.259-1.244 0-.251-.029-.492-.089-.725-.059-.237-.155-.458-.287-.663-.132-.2-.303-.38-.512-.54-.205-.164-.456-.296-.752-.396.25-.114.469-.253.656-.417.187-.165.342-.34.465-.527.123-.191.214-.389.273-.595.064-.205.096-.41.096-.615 0-.465-.078-.872-.232-1.223-.155-.351-.374-.648-.657-.889-.278-.237-.615-.415-1.011-.533-.392-.123-.823-.185-1.292-.185-.461 0-.885.069-1.272.205-.383.137-.715.326-.998.568-.283.246-.504.535-.663.868-.16.332-.239.697-.239 1.094h1.633c0-.215.039-.408.117-.582.082-.173.193-.321.335-.444.136-.123.298-.216.485-.28.191-.068.399-.103.622-.103.251 0 .472.035.663.103.196.068.358.164.485.287.128.132.224.292.288.478.068.187.102.399.102.636 0 .219-.036.424-.109.615-.069.187-.169.345-.301.472-.141.146-.321.26-.54.342-.219.077-.474.116-.766.116h-.977Zm3.643-21.833v-6.405h-1.681l-4.3 6.726.041 1.005h4.307V119h1.633v-2.222h1.251v-1.326h-1.251Zm-4.313 0 2.488-3.862.192-.356v4.218h-2.68Z"
			/>
		</g>
	)
}

export default Algorithm1
