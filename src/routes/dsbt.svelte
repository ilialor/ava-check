<script>
	import logo from '$lib/images/ava.svg';
	import infinity from '$lib/images/icp-logo.svg';
	import triangle from '$lib/images/arrow.svg';
	import background from '$lib/images/background.svg';
	export let badge = {
		user: 'fu2uo-afawr-hokkm-wohpv-kif7b-6a6ci-sog3h-dsu3c-3lkex-dow4k-nqe',

		total_reputation: 101,

		beginner: [['ava', '1.2.1']],

		specialist: [
			['Motoko', '1.2.3.4'],
			['Rust', '1.2.3.5']
		],

		expert: [['AI', '1.2.4.1']],

		ava_link: 'https://ava.capetown/en',

		history_link: 'https://check.ava.capetown',

		ic_link: 'https://internetcomputer.org/'
	};
</script>

<div class="container card" style="background-image: url({background})">
	<div class="card__head">
		<a href={badge.ava_link}>
			<img src={logo} alt="logo" class="card__logo" />
		</a>

		<div class="card__reputation">
			<div class="reputation_count">{badge.total_reputation}</div>
			<div class="reputation_text">Reputation</div>
		</div>
	</div>
	<div class="card__content">
		<div class="title__wrapper">
			<h2 class="card__title">dSBT</h2>
			<span class="card__subtitle">Dynamic Soulbound Token</span>
		</div>
		<div class="card__list">
			<ul>
				<li class="list_item">
					<div class="key">Name:</div>
					<div class="value">{badge.user}</div>
				</li>

				<li class="list_item">
					<div class="key">Beginner:</div>
					<span class="value" title={badge.beginner.map((s) => s[1]).join('; ')}>
						{badge.beginner.map((s) => s[0]).join('; ')}
						<a href={badge.history_link} target="_blank" class="arrow"><img src={triangle} id="beginner-arrow"alt="" /></a>
					</span>
				</li>

				<li class="list_item">
					<div class="key">Specialist:</div>
					<span class="value" title={badge.specialist.map((s) => s[1]).join('; ')}>
						{badge.specialist.map((s) => s[0]).join('; ')}
						<a href={badge.history_link} target="_blank" class="arrow"><img src={triangle} id="specialist-arrow" alt=""/></a>
					</span>
				</li>
				<li class="list_item">
					<div class="key">Expert:</div>
					<span class="value" title={badge.expert.map((s) => s[1]).join('; ')}>
						{badge.expert.map((s) => s[0]).join('; ')}
						<a href={badge.history_link} target="_blank" class="arrow"><img src={triangle} id="expert-arrow" alt="" /></a>
					</span>
				</li>
			</ul>
		</div>

		<div class="card__footer">
			<a href={badge.history_link} class="button">Evolution</a>
			<a href={badge.ic_link} class="infinity">
				<img src={infinity} alt="icon" />
			</a>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@600&family=Montserrat:ital,wght@0,200;0,500;0,900;1,900&display=swap');
	@font-face {
		font-family: Helvetica;
		src: url(fonts/helvetica/helvetica_bold.otf);
	}

	.card {
		background-repeat: no-repeat;
		background-size: cover;
		max-width: 350px;
		border-radius: 10px;
		padding: 40px;
		padding-top: 38px;
		color: white;
		box-sizing: border-box;
	}
	.card__head {
		display: flex;
		justify-content: space-between;
		margin-bottom: 14px;
	}
	.card__reputation {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.reputation_count {
		color: #fff;
		font-family: Helvetica;
		font-size: 32px;
		font-style: normal;
		font-weight: 400;
		line-height: 1;
		letter-spacing: 1.28px;
		margin: 0;
		padding: 0;
	}
	.reputation_text {
		color: #fff;
		text-align: center;
		font-family: Comfortaa;
		font-size: 11.829px;
		font-style: normal;
		font-weight: 600;
		margin: 0;
	}
	.card__title {
		color: #fff;
		font-family: Montserrat;
		font-size: 40px;
		font-style: normal;
		font-weight: 900;
		letter-spacing: 1.6px;
		text-align: left;
		margin: 0;
		line-height: 25px;
	}
	.card__subtitle {
		color: #fff;
		text-align: center;
		font-family: Comfortaa;
		font-size: 0.75rem;
		font-style: normal;
		font-weight: 300;
		line-height: 2rem;
		letter-spacing: 0.03rem;
	}
	.title__wrapper {
		margin-bottom: 28px;
	}
	.card__list {
		margin-bottom: 48px;
	}
  .arrow {
    display: inline-block;
  }
  #beginner-arrow,
	#expert-arrow,
	#specialist-arrow {
		vertical-align: middle;
		margin-left: 8px;
	}
	ul {
		padding: 0;
		list-style: none;
	}
	.list_item {
		display: flex;
		align-items: baseline;
		line-height: 0;
		margin-bottom: 10px;
	}
	.key {
		color: #fff;
		text-align: center;
		font-family: Montserrat;
		font-size: 12px;
		font-style: italic;
		font-weight: 900;
		line-height: normal;
		letter-spacing: 0.48px;
		margin-right: 5px;
	}
	.value {
		color: #fff;
		max-width: 100px;
		font-family: Montserrat;
		font-size: 12px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: 0.48px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.card__footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.button {
		text-decoration: none;
		display: inline-flex;
		padding: 0.3125rem;
		justify-content: center;
		gap: 0.3125rem;
		z-index: 0;
		color: #fff;
		text-align: center;
		font-family: Comfortaa;
		font-size: 0.75rem;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		letter-spacing: 0.48px;
		border-radius: 0.625rem;
		border: 0.6px solid #04a3fc;
		box-shadow: 2px 2px 10px 0px rgba(88, 220, 255, 0.25);
	}

	.button:before {
		content: '';
		position: absolute;
		z-index: -1;
		inset: 0;
		padding: 0.6px;
		border-radius: 10px;
		background: linear-gradient(170deg, #11bbfe, #8c41fb);
		-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
	}
</style>
