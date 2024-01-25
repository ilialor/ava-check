<script>
	import logo_agora from '$lib/images/logo.svg';
	import logo_ava from '$lib/images/logo.png';
	import logo_bg from '$lib/images/logo-bg.svg';
	import cubes_1 from '$lib/images/cubes1.png';
	import cubes_2 from '$lib/images/cubes2.png';
	import question from '$lib/images/question.svg';
	import ellipse_top from '$lib/images/ellipse-top.svg';
	import ellipse_buttom from '$lib/images/ellipse-bottom.svg';

	export let cert = {
		owner: 'aaaaa-aa',
		name: 'John',
		publisher: 'aaaaa-aa',
		tokenId: '42',
		basis: 'Basic Motoko',
		date: '2024-01-01',
		reputation: {
			category: 'ava',
			value: '10'
		}
	};

	let badgeReceipt = cert;
	let ava = 'https://ava.capetown/en';
</script>

<section>
	{#if cert && cert.owner !== 'aaaaa-aa'}
		<div class="certificate">
			<div class="background-image" style="background-image: url({cubes_1});" />
			<h2 class="certificate__title">Certificate #<span>{badgeReceipt.tokenId}</span></h2>

			<ul class="certificate__list">
				<li class="certificate__list-item">
					<span class="certificate__list-item-title">Name</span>
					<span class="certificate__list-item-text">{badgeReceipt.owner}</span>
				</li>

				<li class="certificate__list-item">
					<span class="certificate__list-item-title">Course</span>
					<span class="certificate__list-item-text">{badgeReceipt.basis}</span>
				</li>

				<li class="certificate__list-item">
					<span class="certificate__list-item-title">Reputation</span>
					<span class="certificate__list-item-text">{badgeReceipt.reputation.value}</span>
				</li>

				<li class="certificate__list-item">
					<span class="certificate__list-item-title">Category </span>
					<span class="certificate__list-item-text">{badgeReceipt.reputation.category}</span>

					<div class="certificate__list-item-question" style="background-image: url({question});">
						<div class="certificate__list-item-question-icon" />
						<ul class="certificate__list-item-question-info">
							<li class="certificate__list-item-question-info-item">1. Natural sciences</li>
							<li class="certificate__list-item-question-info-item">
								2. Computer and information sciences
							</li>
							<li class="certificate__list-item-question-info-item">3. Programming languages</li>
							<li class="certificate__list-item-question-info-item">4. Motoko</li>
						</ul>
					</div>
				</li>

				<li class="certificate__list-item">
					<span class="certificate__list-item-title">Date</span>
					<span class="certificate__list-item-text">{badgeReceipt.date}</span>
				</li>
			</ul>

			<div class="certificate__logo">
				<a href={ava}>
					<img src={logo_agora} alt="Agorapp" />
					<img class="certificate__logo-bg" src={logo_bg} alt="bg" />
				</a>
			</div>

			<div class="certificate__ava-link">
				<a href={ava}>
					<img src={logo_ava} alt="ava.capetown" />
				</a>
			</div>

			<div class="certificate__ellipses">
				<!-- <img
					class="certificate__ellipses-item certificate__ellipses-item_top"
					src={ellipse_top}
					alt="ellipse"
				/>
				<img
					class="certificate__ellipses-item certificate__ellipses-item_bottom"
					src={ellipse_buttom}
					alt="ellipse"
				/> -->
			</div>
		</div>
	{/if}
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@400;700&display=swap');
	/* body {
		background-color: #2f2e32;
	} */

	.certificate {
		position: relative;
		width: 450px;
		min-height: 300px;
		margin: 0 auto;
		padding: 20px 24px;
		box-sizing: border-box;
		overflow: hidden;
		border-radius: 10px;
		background-color: #1c1b1f;
	}
	.certificate::before {
		content: '';
		position: absolute;
		top: -20px;
		left: -54px;
		width: 126px;
		height: 81px;
		transform: rotate(10.365deg);
		background: url({cubes_1}) center no-repeat;
	}
	.certificate::after {
		content: '';
		position: absolute;
		bottom: -6px;
		right: -22px;
		width: 118px;
		height: 76px;
		transform: rotate(-3deg);
		background: url({cubes_2}) top left no-repeat;
	}
	.certificate__title {
		margin: 0 0 33px;
		color: #fff;
		text-align: center;
		font-family: 'Goldman';
		font-size: 1rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
	.certificate__title span {
		font-family: 'Red Hat Text';
		font-weight: 700;
	}
	.certificate__list {
		margin: 0;
		padding: 0;
		list-style-type: none;
	}
	.certificate__list-item {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 24px;
		margin-bottom: 15px;
	}
	.certificate__list-item-title {
		display: inline-block;
		color: #fff;
		text-align: right;
		font-family: 'Goldman';
		font-size: 0.8rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
	.certificate__list-item-text {
		display: inline-block;
		max-width: 100px;
		color: #fff;
		font-family: 'Red Hat Text';
		font-size: 0.8rem;
		font-style: normal;
		font-weight: 400;
		line-height: 19px;
		border-bottom: 1px dashed #fff;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.certificate__list-item-question {
		position: absolute;
		top: 50%;
		right: 4px;
		transform: translateY(-50%);
	}
	.certificate__list-item-question-icon {
		width: 15px;
		height: 15px;
		background: url({question}) center no-repeat;
		background-size: 13px;
		cursor: pointer;
	}
	.certificate__list-item-question-info {
		position: absolute;
		right: -4px;
		bottom: 30px;
		display: none;
		padding: 13px 22px;
		list-style-type: none;
		border-radius: 10px;
		background: radial-gradient(318.85% 112.36% at 11.79% 9.26%, #262842 0%, #24424a 100%);
	}
	.certificate__list-item-question-info-item {
		width: -moz-max-content;
		width: max-content;
		color: #fff;
		font-family: 'Red Hat Text';
		font-size: 10px;
		font-style: normal;
		font-weight: 400;
		line-height: 150%;
	}
	.certificate__list-item-question-info-item:nth-child(2) {
		padding-left: 8px;
	}
	.certificate__list-item-question-info-item:nth-child(3) {
		padding-left: 16px;
	}
	.certificate__list-item-question-info-item:nth-child(4) {
		padding-left: 24px;
	}
	.certificate__list-item-question-info-item:nth-child(5) {
		padding-left: 32px;
	}
	.certificate__list-item-question-info-item:nth-child(6) {
		padding-left: 40px;
	}
	.certificate__list-item-question-info-item:nth-child(7) {
		padding-left: 48px;
	}
	.certificate__list-item-question:hover .certificate__list-item-question-info {
		display: block;
	}
	.certificate__logo {
		position: absolute;
		top: 120px;
		left: 33px;
	}
	.certificate__logo-bg {
		position: relative;
		z-index: 2;
		filter: blur(50px);
	}
	/* .certificate__logo-logo {
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: 5;
		transform: translateX(-50%) translateY(-50%);
	} */
	.certificate__ava-link {
		position: absolute;
		left: 20px;
		bottom: 13px;
		opacity: 0.5;
		transition: opacity ease-in-out 0.3s;
	}
	.certificate__ava-link:hover {
		opacity: 1;
	}
	.certificate__ava-link a {
		display: block;
	}
	.certificate__ava-link a img {
		display: block;
		max-width: 18px;
		height: auto;
		filter: drop-shadow(0px 5.292px 1.764px rgba(0, 0, 0, 0.25));
	}
	/* .certificate__ellipses-item {
		position: absolute;
		z-index: 1;
		filter: blur(75px);
	}
	.certificate__ellipses-item_top {
		top: 0;
		left: -50px;
	}
	.certificate__ellipses-item_bottom {
		left: 150px;
		bottom: -56px;
	} */
</style>
