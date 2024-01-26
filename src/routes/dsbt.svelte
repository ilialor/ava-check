<script>
	// let className = '';
	// export { className as class };
	import back from '$lib/images/back.svg';
    import icp_logo from '$lib/images/icp-logo.svg';
	export const badge = {
		user: 'fu2uo-afawr-hokkm-wohpv...',
		total_reputation: 100,
		beginner: [
			{
				name: 'ava',
				code: '1.2.1'
			}
		],
		specialist: [
			{
				name: 'Motoko',
				code: '1.2.3.4'
			}
		],
		expert: [
			{
				name: 'AI',
				code: '1.2.4.1'
			}
		],
		ava_link: 'https://ava.capetown',
		history_link: 'https://check.ava.capetown',
		ic_link: 'https://internetcomputer.org/'
	};
</script>

<div class='back' style='background-image=url{back}'>
	<!-- <img class="back" src={back} alt="background image" /> -->
	<!-- <img
      class="internet-computer-icp-logo-1-1-1"
      src={icp_logo}
      alt="background image"
    /> -->
	<svg
		class="vector"
		width="37"
		height="42"
		viewBox="0 0 37 42"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M8.33838 3.06179C9.02283 1.87255 10.7247 1.8332 11.4634 2.98954L18.2827 13.6645C19.0512 14.8676 18.2058 16.448 16.7785 16.4764L3.66515 16.7374C2.24306 16.7657 1.33484 15.2306 2.04435 13.9978L8.33838 3.06179Z"
			fill="#EE4817"
		/>
		<path
			d="M20.2556 39.046C19.5397 39.9546 18.1706 39.9784 17.4236 39.0951L2.75986 21.7539C1.76419 20.5764 2.58388 18.771 4.12568 18.7456L32.8231 18.2731C34.3634 18.2477 35.2426 20.0221 34.2892 21.2322L20.2556 39.046Z"
			fill="url(#paint0_radial_1078_6)"
		/>
		<path
			d="M23.7509 2.92056C24.4345 1.69334 26.1894 1.66378 26.914 2.86728L33.331 13.5251C34.0584 14.7332 33.2019 16.2752 31.7919 16.296L19.3349 16.4799C17.9283 16.5007 17.0263 14.9913 17.711 13.7623L23.7509 2.92056Z"
			fill="#4AD5F4"
		/>
		<path
			d="M25.7807 5.72005C26.4695 4.51794 28.1929 4.48896 28.9217 5.66724L33.6701 13.3446C34.417 14.5522 33.5621 16.1131 32.1423 16.1341L22.9173 16.2703C21.5008 16.2912 20.5999 14.7628 21.3041 13.5336L25.7807 5.72005Z"
			fill="#D05EBC"
		/>
		<defs>
			<radialGradient
				id="paint0_radial_1078_6"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(15.908 0.243667) rotate(82.6186) scale(31.6324 28.7293)"
			>
				<stop stop-color="#CD095B" />
				<stop offset="0.519986" stop-color="#EA3581" />
			</radialGradient>
		</defs>
	</svg>
	<div class="body">
		<div class="name">
			<div class="name-fu-2-uo-afawr-hokkm-wohpv">
				<span>
					<span class="name-fu-2-uo-afawr-hokkm-wohpv-span">Name:</span>
					<span class="name-fu-2-uo-afawr-hokkm-wohpv-span2">
						{badge.user}
					</span>
				</span>
			</div>
		</div>
		<div class="beginner">
			<svg
				class="frame-110"
				width="16"
				height="11"
				viewBox="0 0 16 11"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M5.08504 9.06444L5.01492 1.63521C5.01158 1.34191 5.12086 1.05391 5.33011 0.804548C5.53936 0.555183 5.84002 0.354647 6.1973 0.226153C6.62124 0.0757065 7.09392 0.0161704 7.56147 0.0543289C8.02903 0.0924874 8.47265 0.226806 8.8418 0.441978L14.9745 4.12525C15.2038 4.26986 15.3883 4.44914 15.5155 4.65097C15.6427 4.8528 15.7096 5.07244 15.7117 5.29502C15.7138 5.5176 15.6511 5.73791 15.5277 5.94102C15.4043 6.14414 15.2232 6.32531 14.9967 6.47225L8.93407 10.2182C8.56902 10.4372 8.12797 10.576 7.66118 10.619C7.19439 10.6619 6.72064 10.6073 6.29391 10.4612C5.93423 10.3364 5.62981 10.139 5.41588 9.89178C5.20194 9.64459 5.08723 9.35774 5.08504 9.06444Z"
					fill="#58DCFF"
				/>
			</svg>
			<div class="frame-117">
				<div class="beginner-1-2-3-3">
					<span>
						<span class="beginner-1-2-3-3-span">Beginner:</span>
						<span class="beginner-1-2-3-3-span2">{badge.beginner[0].code}</span>
					</span>
				</div>
			</div>
		</div>
		<div class="spec">
			<div class="frame-113">
				<div class="specialist-1-2-3-4">
					<span>
						<span class="specialist-1-2-3-4-span">Specialist:</span>
						<span class="specialist-1-2-3-4-span2">{badge.specialist[0].code}</span>
					</span>
				</div>
			</div>
			<svg
				class="frame-114"
				width="14"
				height="11"
				viewBox="0 0 14 11"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M5.07114 9.06444L5.0125 1.63521C5.0097 1.34191 5.1011 1.05391 5.27611 0.804548C5.45112 0.555183 5.70258 0.354647 6.0014 0.226153C6.35596 0.0757065 6.75129 0.0161704 7.14234 0.0543289C7.53339 0.0924874 7.90442 0.226806 8.21316 0.441978L13.3424 4.12525C13.5341 4.26985 13.6884 4.44914 13.7948 4.65097C13.9012 4.8528 13.9572 5.07244 13.9589 5.29502C13.9607 5.5176 13.9082 5.73791 13.805 5.94102C13.7018 6.14414 13.5504 6.32531 13.3609 6.47225L8.29033 10.2182C7.98502 10.4372 7.61614 10.576 7.22574 10.619C6.83533 10.6619 6.4391 10.6073 6.08219 10.4612C5.78138 10.3364 5.52677 10.139 5.34784 9.89177C5.16891 9.64458 5.07298 9.35774 5.07114 9.06444Z"
					fill="#58DCFF"
				/>
			</svg>
		</div>
		<div class="expert">
			<div class="frame-115">
				<div class="expert-1-2-2-1">
					<span>
						<span class="expert-1-2-2-1-span">Expert:</span>
						<span class="expert-1-2-2-1-span2">{badge.expert[0].code}</span>
					</span>
				</div>
			</div>
			<svg
				class="frame-116"
				width="14"
				height="11"
				viewBox="0 0 14 11"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M5.07114 9.13939L5.0125 1.71016C5.0097 1.41686 5.1011 1.12886 5.27611 0.879499C5.45112 0.630134 5.70258 0.429598 6.0014 0.301104C6.35596 0.150658 6.75129 0.0911216 7.14234 0.12928C7.53339 0.167439 7.90442 0.301757 8.21316 0.516929L13.3424 4.2002C13.5341 4.34481 13.6884 4.5241 13.7948 4.72592C13.9012 4.92775 13.9572 5.14739 13.9589 5.36997C13.9607 5.59255 13.9082 5.81286 13.805 6.01597C13.7018 6.21909 13.5504 6.40026 13.3609 6.5472L8.29033 10.2932C7.98502 10.5121 7.61614 10.651 7.22574 10.6939C6.83533 10.7369 6.4391 10.6822 6.08219 10.5361C5.78138 10.4113 5.52677 10.2139 5.34784 9.96673C5.16891 9.71954 5.07298 9.43269 5.07114 9.13939Z"
					fill="#58DCFF"
				/>
			</svg>
		</div>
	</div>
	<div class="frame-21">
		<div class="evolution"><a href="http://check.ava.capetown">Evolution</a></div>
	</div>
	<div class="value-rep">
		<div class="rep">
			<div class="reputation">Reputation</div>
		</div>
		<div class="value">
			<div class="reputation_value">{badge.total_reputation}</div>
		</div>
	</div>
	<div class="d-sbt">
		<div class="frame-118">
			<div class="d-sbt2">dSBT</div>
		</div>
		<div class="frame-119">
			<div class="dynamic-soulbound-token">Dynamic Soulbound Token</div>
		</div>
	</div>
</div>

<style>
	.dsbt {
        box-sizing: border-box;
		border-radius: 10px;
		width: 350px;
		height: 356px;
		position: relative;
		overflow: hidden;
	}
	.back {
		width: 350px;
		height: 356px;
		position: absolute;
		left: 0px;
		top: 0px;
		object-fit: cover;
	}
	.internet-computer-icp-logo-1-1-1 {
		width: 47.94px;
		height: 26.37px;
		position: absolute;
		left: 261.99px;
		top: 288.85px;
		transform-origin: 0 0;
		transform: rotate(-0.18deg) scale(1, 1);
		object-fit: cover;
	}
	.vector {
		border-radius: 0px;
		width: 36.41px;
		height: 40.54px;
		position: absolute;
		left: 39px;
		top: 38.54px;
		transform: translate(1.8px, 1.44px);
		overflow: visible;
	}
	.body {
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: flex-start;
		justify-content: flex-start;
		position: absolute;
		left: 40px;
		top: 177.07px;
	}
	.name {
		display: flex;
		flex-direction: row;
		gap: 0px;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		position: relative;
	}
	.name-fu-2-uo-afawr-hokkm-wohpv {
		color: #ffffff;
		text-align: center;
		font-family: '-', sans-serif;
		font-size: 12px;
		font-weight: 400;
		position: relative;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}
	.name-fu-2-uo-afawr-hokkm-wohpv-span {
		color: #ffffff;
		font-family: 'Montserrat-BlackItalic', sans-serif;
		font-size: 12px;
		font-weight: 900;
		font-style: italic;
	}
	.name-fu-2-uo-afawr-hokkm-wohpv-span2 {
		color: #ffffff;
		font-family: 'Montserrat-Medium', sans-serif;
		font-size: 12px;
		font-weight: 500;
	}
	.beginner {
		display: flex;
		flex-direction: column;
		gap: 0px;
		align-items: flex-start;
		justify-content: flex-start;
		flex-shrink: 0;
		position: relative;
	}
	.frame-110 {
		padding: 0px 0px 0px 5px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: flex-start;
		justify-content: flex-start;
		flex-shrink: 0;
		height: auto;
		position: absolute;
		left: 117px;
		top: 0.93px;
		overflow: visible;
	}
	.frame-117 {
		display: flex;
		flex-direction: column;
		gap: 0px;
		align-items: flex-start;
		justify-content: flex-start;
		flex-shrink: 0;
		position: relative;
	}
	.beginner-1-2-3-3 {
		color: #ffffff;
		text-align: center;
		font-family: '-', sans-serif;
		font-size: 12px;
		font-weight: 400;
		position: relative;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}
	.beginner-1-2-3-3-span {
		color: #ffffff;
		font-family: 'Montserrat-BlackItalic', sans-serif;
		font-size: 12px;
		font-weight: 900;
		font-style: italic;
	}
	.beginner-1-2-3-3-span2 {
		color: #ffffff;
		font-family: 'Montserrat-Medium', sans-serif;
		font-size: 12px;
		font-weight: 500;
	}
	.spec {
		display: flex;
		flex-direction: column;
		gap: 0px;
		align-items: flex-start;
		justify-content: flex-start;
		flex-shrink: 0;
		position: relative;
	}
	.frame-113 {
		display: flex;
		flex-direction: column;
		gap: 0px;
		align-items: flex-start;
		justify-content: flex-start;
		flex-shrink: 0;
		position: relative;
	}
	.specialist-1-2-3-4 {
		color: #ffffff;
		text-align: center;
		font-family: '-', sans-serif;
		font-size: 12px;
		font-weight: 400;
		position: relative;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}
	.specialist-1-2-3-4-span {
		color: #ffffff;
		font-family: 'Montserrat-BlackItalic', sans-serif;
		font-size: 12px;
		font-weight: 900;
		font-style: italic;
	}
	.specialist-1-2-3-4-span2 {
		color: #ffffff;
		font-family: 'Montserrat-Medium', sans-serif;
		font-size: 12px;
		font-weight: 500;
	}
	.frame-114 {
		padding: 0px 0px 0px 5px;
		display: flex;
		flex-direction: column;
		gap: 5px;
		align-items: flex-start;
		justify-content: flex-start;
		flex-shrink: 0;
		height: auto;
		position: absolute;
		left: 119px;
		top: 2.93px;
		overflow: visible;
	}
	.expert {
		display: flex;
		flex-direction: column;
		gap: 0px;
		align-items: flex-start;
		justify-content: flex-start;
		flex-shrink: 0;
		position: relative;
	}
	.frame-115 {
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: flex-start;
		justify-content: flex-start;
		flex-shrink: 0;
		position: relative;
	}
	.expert-1-2-2-1 {
		color: #ffffff;
		text-align: center;
		font-family: '-', sans-serif;
		font-size: 12px;
		font-weight: 400;
		position: relative;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}
	.expert-1-2-2-1-span {
		color: #ffffff;
		font-family: 'Montserrat-BlackItalic', sans-serif;
		font-size: 12px;
		font-weight: 900;
		font-style: italic;
	}
	.expert-1-2-2-1-span2 {
		color: #ffffff;
		font-family: 'Montserrat-Medium', sans-serif;
		font-size: 12px;
		font-weight: 500;
	}
	.frame-116 {
		padding: 0px 0px 0px 5px;
		display: flex;
		flex-direction: column;
		gap: 0px;
		align-items: flex-start;
		justify-content: flex-start;
		flex-shrink: 0;
		height: auto;
		position: absolute;
		left: 92px;
		top: 2px;
		overflow: visible;
	}
	.frame-21 {
		border-radius: 10px;
		border-width: 0.6px;
		border-style: solid;
		border-image: var(
			--linear,
			linear-gradient(100.12deg, rgba(4, 163, 252, 1) 0%, rgba(112, 0, 255, 1) 100%)
		);
		border-image-slice: 1;
		padding: 5px;
		display: flex;
		flex-direction: row;
		gap: 5px;
		align-items: center;
		justify-content: center;
		position: absolute;
		left: 40px;
		top: 291px;
		box-shadow: 2px 2px 10px 0px rgba(88, 220, 255, 0.25);
	}
	.evolution {
		color: #ffffff;
		text-align: center;
		font-family: 'Montserrat-SemiBold', sans-serif;
		font-size: 12px;
		font-weight: 600;
		position: relative;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}
	.value-rep {
		width: 75px;
		height: 46px;
		position: absolute;
		left: 237px;
		top: 33px;
	}
	.rep {
		display: flex;
		flex-direction: column;
		gap: 0px;
		align-items: center;
		justify-content: center;
		position: absolute;
		left: 6px;
		top: 33px;
		transform-origin: 0 0;
		transform: rotate(0deg) scale(1, 1);
	}
	.reputation {
		color: #ffffff;
		text-align: center;
		font-family: 'Comfortaa-SemiBold', sans-serif;
		font-size: 11.828571319580078px;
		font-weight: 600;
		position: relative;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}
	.value {
		display: flex;
		flex-direction: column;
		gap: 0px;
		align-items: center;
		justify-content: center;
		height: 31px;
		position: absolute;
		left: 0px;
		top: 0px;
	}
	.reputation_value {
		color: #ffffff;
		text-align: left;
		font-family: 'Helvetica-Bold', sans-serif;
		font-size: 32px;
		font-weight: 700;
		position: relative;
		display: flex;
		align-items: flex-end;
		justify-content: flex-start;
	}
	.d-sbt {
		width: 176px;
		height: 55px;
		position: absolute;
		left: 40px;
		top: 94px;
	}
	.frame-118 {
		display: flex;
		flex-direction: column;
		gap: 0px;
		align-items: flex-start;
		justify-content: flex-start;
		position: absolute;
		left: 0px;
		top: 0px;
	}
	.d-sbt2 {
		color: #ffffff;
		text-align: right;
		font-family: 'Montserrat-Black', sans-serif;
		font-size: 40px;
		font-weight: 900;
		position: relative;
	}
	.frame-119 {
		display: flex;
		flex-direction: column;
		gap: 0px;
		align-items: flex-start;
		justify-content: flex-start;
		position: absolute;
		left: 0px;
		top: 42px;
	}
	.dynamic-soulbound-token {
		color: #ffffff;
		text-align: center;
		font-family: 'Comfortaa-Light', sans-serif;
		font-size: 12px;
		font-weight: 300;
		position: relative;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}
</style>
