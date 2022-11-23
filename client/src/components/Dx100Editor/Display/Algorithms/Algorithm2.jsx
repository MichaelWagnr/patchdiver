const Algorithm2 = ({ isActive, highlighted, transparent }) => {
	return (
		<g>
			<path
				// algorithm 2
				fill="var(--fm-display-fg)"
				fillOpacity={isActive ? highlighted : transparent}
				d="M390.197 154h23.627v16h-23.627v-16Zm-31.503-48h23.627v16h-23.627v-16Zm31.503 24h23.627v16h-23.627v-16Zm0-24h23.627v16h-23.627v-16Zm9.845 40h3.937v8h-3.937v-8Zm0-24h3.937v8h-3.937v-8Zm3.937 2h13.783v2h-13.783v-2Zm0-22h13.783v2h-13.783v-2Zm-1.969 0h1.969v4h-1.969v-4Zm13.783 2h1.969v20h-1.969v-20Z"
			/>
			<path
				fill="var(--fm-display-bg)"
				d="M404.711 143v-1.319h-4.635l2.215-2.366c.291-.309.56-.61.806-.902.251-.292.467-.581.65-.868.177-.287.316-.577.417-.868.104-.296.157-.602.157-.916 0-.42-.068-.802-.205-1.149-.137-.351-.335-.651-.595-.902-.264-.251-.59-.447-.977-.588-.383-.141-.818-.212-1.306-.212-.52 0-.991.084-1.415.253-.419.169-.775.397-1.067.684-.296.287-.524.624-.683 1.011-.16.383-.239.791-.239 1.224h1.64c0-.287.037-.542.11-.766.072-.227.182-.421.328-.581.141-.15.319-.266.533-.348.214-.082.467-.123.759-.123.228 0 .433.038.615.116.187.077.346.184.478.321.133.137.233.301.301.492.069.192.103.404.103.636 0 .173-.025.346-.075.52-.046.168-.123.351-.233.547-.114.195-.262.412-.444.649-.182.232-.408.497-.677.793l-3.24 3.527V143h6.679Zm-1.915 24v-9.953h-.102l-4.095 1.517v1.443l2.55-.937V167h1.647ZM368.6 113.285v1.285h.978c.283 0 .538.034.766.103.232.064.43.162.594.294.164.137.29.307.376.512.087.206.13.452.13.739 0 .255-.038.483-.116.683-.073.196-.18.36-.321.493-.146.141-.326.248-.54.321-.21.068-.447.102-.711.102-.246 0-.472-.036-.677-.109-.201-.073-.374-.175-.52-.308-.15-.127-.266-.282-.348-.464-.078-.187-.116-.39-.116-.609h-1.634c0 .465.089.873.266 1.224.183.346.424.638.725.875s.649.414 1.046.533c.396.118.809.178 1.237.178.474 0 .914-.064 1.32-.192.41-.132.765-.323 1.066-.574.296-.246.529-.549.697-.909.173-.365.26-.779.26-1.244 0-.251-.03-.492-.089-.725-.059-.237-.155-.458-.287-.663-.132-.2-.303-.38-.513-.54-.205-.164-.455-.296-.752-.396.251-.114.47-.253.657-.417.187-.165.341-.34.465-.527.123-.191.214-.389.273-.595.064-.205.096-.41.096-.615 0-.465-.078-.872-.233-1.223-.155-.351-.373-.648-.656-.889-.278-.237-.615-.415-1.012-.533-.392-.123-.822-.185-1.292-.185-.46 0-.884.069-1.271.205-.383.137-.716.326-.998.568-.283.246-.504.535-.663.868-.16.332-.24.697-.24 1.094h1.634c0-.215.039-.408.116-.582.082-.173.194-.321.335-.444.137-.123.299-.216.486-.28.191-.068.398-.103.622-.103.25 0 .471.035.663.103.196.068.358.164.485.287.128.132.224.292.287.478.069.187.103.399.103.636 0 .219-.037.424-.11.615-.068.187-.168.345-.3.472-.142.146-.322.26-.54.342-.219.077-.474.116-.766.116h-.978Zm35.147 2.167v-6.405h-1.682l-4.3 6.726.041 1.005h4.307V119h1.634v-2.222h1.251v-1.326h-1.251Zm-4.314 0 2.488-3.862.192-.356v4.218h-2.68Z"
			/>
		</g>
	)
}

export default Algorithm2
