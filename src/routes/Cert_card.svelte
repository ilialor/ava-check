<script>
	const badgeReceipt = {
		owner: 'Ivone Drake',
		userId: 2300900923,
		reputation: {
			total: 695,
			specialist: [
				{
					code: '1.2.3.4',
					name: 'Motoko'
				},
				{
					code: '7.2.2.45',
					name: 'Texas Holdem'
				}
			],
			expert: [
				{
					code: '1.2.2.1',
					name: 'Internet Computer Core'
				}
			],
			evolution: 'https://ava.capetown/user/'
		}
	};
</script>

<section>
	<div class="certificate">
		<h2 class="certificate__title">Certificate #<span>{badgeReceipt.userId}</span></h2>

		<ul class="certificate__list">
			<li class="certificate__list-item">
				<span class="certificate__list-item-title">Name</span>
				<span class="certificate__list-item-text">{badgeReceipt.owner}</span>
			</li>

			<!-- Example: Rendering course information. You might need to adjust this based on actual data structure -->
			<li class="certificate__list-item">
				<span class="certificate__list-item-title">Course</span>
				<span class="certificate__list-item-text"
					>Beginner {badgeReceipt.reputation.specialist[0].name}</span
				>
			</li>

			<!-- Publisher and other static information can be retained as is -->

			<li class="certificate__list-item">
				<span class="certificate__list-item-title">Reputation</span>
				<span class="certificate__list-item-text">{badgeReceipt.reputation.total}</span>
			</li>

			<!-- Dynamically render 'specialist' categories -->
			{#each badgeReceipt.reputation.specialist as specialist}
				<li class="certificate__list-item">
					<span class="certificate__list-item-title">Specialist in {specialist.name}</span>
					<span class="certificate__list-item-text">Code: {specialist.code}</span>
				</li>
			{/each}

			<!-- Dynamically render 'expert' categories -->
			{#each badgeReceipt.reputation.expert as expert}
				<li class="certificate__list-item">
					<span class="certificate__list-item-title">Expert in {expert.name}</span>
					<span class="certificate__list-item-text">Code: {expert.code}</span>
				</li>
			{/each}

			<li class="certificate__list-item">
				<span class="certificate__list-item-title">Date</span>
				<span class="certificate__list-item-text">Dynamic Date Here</span>
			</li>
		</ul>

		<div class="certificate__logo">
			<a href={badgeReceipt.reputation.evolution}>
				<img src="./assets/logo.svg" alt="Agorapp" />
			</a>
		</div>

		<div class="certificate__ava-link">
			<a href={badgeReceipt.reputation.evolution}>
				<img src="./assets/fox.svg" alt="ava.capetown" />
			</a>
		</div>

		<div class="certificate__ellipses">
			<!-- Ellipses images remain the same -->
		</div>
	</div>
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@400;700&display=swap');
	body {
		background-color: #2f2e32;
	}

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
		background: url(../assets/cubes-1.png) center no-repeat;
	}
	.certificate::after {
		content: '';
		position: absolute;
		bottom: -6px;
		right: -22px;
		width: 118px;
		height: 76px;
		transform: rotate(-3deg);
		background: url(../assets/cubes-2.png) top left no-repeat;
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
		min-width: 160px;
		color: #fff;
		font-family: 'Red Hat Text';
		font-size: 0.8rem;
		font-style: normal;
		font-weight: 400;
		line-height: 19px;
		border-bottom: 1px dashed #fff;
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
		background: url(../assets/question.svg) center no-repeat;
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
	.certificate__logo-logo {
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: 5;
		transform: translateX(-50%) translateY(-50%);
	}
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
	.certificate__ellipses-item {
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
	}
</style>
