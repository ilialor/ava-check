<script>
	import arrow from '$lib/images/arrow.svg';
	import aVa_logo from '$lib/images/aVa_logo.png';
	import card_background from '$lib/images/card-background.svg';
	import evolution from '$lib/images/evolution.svg';

	import card_title from '$lib/images/card-title-not-filled.svg';

	import icp_logo from '$lib/images/icp-logo.svg';

	import rep2 from '$lib/images/rep2.svg';

	export let badgeReceipt = {
		user: 'Ivone Drake',
		total_reputation: 695,
		ava_link: 'https://ava.capetown',
		ic_link: 'https://internetcomputer.org',
		beginner: [['1.2.3.5', 'Rust']],
		specialist: [
			['1.2.3.4', 'Motoko'],
			['7.2.2.45', 'Texas Holdem']
		],
		expert: [['1.2.2.1', 'Internet Computer Core']],
		history_link: 'https://check.ava.capetown'
	};

	let website = 'https://ava.capetown/en';
	let icp_link = 'https://internetcomputer.org';

	let evolution_link = 'https://check.ava.capetown';
</script>

<main>
	<div style="background-image: url({card_background})" class="card">
		<div class="card-header">
			<a href={website} target="_blank" class="card-logo-link">
				<div style="background-image: url({aVa_logo})" class="card-logo" /></a
			>
			<div class="title">
				<img src={card_title} alt="dSBT" />
			</div>

			<div class="card-reputation">
				<div style="background-image: url({rep2})" class="reputation-icon" />
				<div class="reputation-value">
					{badgeReceipt.total_reputation}
				</div>
			</div>
		</div>
		<div class="card-content">
			<div class="card-info">
				<div class="info-item">
					<span class="info-label">Name:</span>
					<span class="info-value" id="name">{badgeReceipt.user}</span>
				</div>
				<div class="info-item">
					<span class="info-label">Beginner:</span>
					<span
						class="info-value"
						id="beginner"
						title={badgeReceipt.beginner.map((s) => s[1]).join('; ')}
					>
						{badgeReceipt.beginner.map((s) => s[0]).join('; ')}
						<a href={evolution_link} target="_blank" class="card-logo-link"
							><img src={arrow} id="beginner-arrow" alt="arrow" title="Click to see more" /></a
						></span
					>
				</div>
				<div class="info-item">
					<span class="info-label">Specialist:</span>
					<span
						class="info-value"
						id="specialist"
						title={badgeReceipt.specialist.map((s) => s[1]).join('; ')}
					>
						{badgeReceipt.specialist.map((s) => s[0]).join('; ')}
						<a href={evolution_link} target="_blank" class="card-logo-link"
							><img src={arrow} id="specialist-arrow" alt="arrow" title="Click to see more" /></a
						></span
					>
				</div>
				<div class="info-item">
					<span class="info-label">Expert:</span>
					<span
						class="info-value"
						id="expert"
						title={badgeReceipt.expert.map((s) => s[1]).join('; ')}
						>{badgeReceipt.expert.map((s) => s[0]).join('; ')}<a
							href={evolution_link}
							target="_blank"
							class="card-logo-link"
							><img src={arrow} id="expert-arrow" alt="arrow" title="Click to see more" /></a
						></span
					>
				</div>
			</div>
			<div class="footer">
				<a href={evolution_link} target="_blank" class="evolution-link"
					><img src={evolution} alt="Evolution link" /></a
				>
				<div class="icp-icon">
					<a href={icp_link} target="_blank" class="icp-logo"
						><img src={icp_logo} alt="ICP link" /></a
					>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	:root {
		/* font sizes */
		--font-size-base: 16px;
		--font-size-less: 12px;

		/* Colors */
		--primary-color: #ee4817;
		--color-white: #fff;

		/* Gaps */
		--gap-xl: 20px;

		/* Paddings */
		--padding-3xs: 10px;
		--padding-13xl: 32px;
	}

	main {
		display: block;
	}

	.card-header::before,
	.card-header::after {
		content: '';
		flex: 1;
	}

	.card-logo-link {
		display: inline-block;
	}

	.card-logo,
	.card-reputation {
		flex: 0;
	}

	.title {
		flex: 0;
	}

	.card {
		display: flex;
		flex-direction: column;
		width: 22rem;
		height: 23rem;
		border-radius: 0.625rem;
		border: 1px solid #fff;
		background: linear-gradient(161deg, #00155d 8.46%, #013440 91.91%);
		background-image: url({card_background});
		color: var(--color-white);
		overflow: hidden;
		margin-top: 2rem;
	}

	.card-header {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 95%;
		padding: 1rem;
		background-color: transparent;
	}

	.title {
		flex-shrink: 0;
		padding: 0;
	}

	.card-logo {
		background-image: url({aVa_logo});
		background-size: contain;
		background-repeat: no-repeat;
		min-width: 50px;
		height: 40px;
		flex-shrink: 0;
		margin-right: 1rem;
	}

	.card-reputation {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		margin-left: auto;
		margin-right: 0.5rem;
	}

	.reputation-icon {
		background-image: url({rep2});
		background-size: contain;
		background-repeat: no-repeat;
		min-width: 50px;
		height: 80px;
		margin-left: 0.5rem;
	}

	.reputation-value {
		text-align: right;
		color: var(--color-white);
		font-family: 'Montserrat', 'Goldman', sans-serif;
		font-size: 1.2rem;
		margin-left: 0.5rem;
	}

	.card-content {
		font-family: 'Montserrat', 'Goldman', sans-serif;
		padding: 16px;
		text-align: left;
		font-size: var(--font-size-base);
		color: var(--color-white);
		overflow-y: auto;
		max-height: 600px;
	}

	.card-info {
		margin-bottom: 16px;
		font-family: 'Montserrat', 'Goldman', sans-serif;
	}

	.info-item {
		display: flex;
		align-items: center;
		margin-bottom: 8px;
	}

	.info-label {
		font-size: var(--font-size-less);
		width: 120px;
		text-align: right;
		color: #07d1fd;
		margin-right: 1rem;
		flex-shrink: 0;
	}

	.info-value {
		font-size: var(--font-size-less);
		color: var(--color-white);
		border-bottom: 1px solid #07d1fd;
		padding-bottom: 3px;
		position: relative;
	}

	.info-value a {
		color: inherit;
		text-decoration: inherit;
	}
	.info-value img {
		vertical-align: middle;
		margin-left: 0.5rem;
	}

	#beginner-arrow,
	#expert-arrow,
	#specialist-arrow {
		vertical-align: middle;
		margin-left: 8px;
	}

	.footer {
		display: flex;
	}

	.evolution-link {
		margin-top: 10px;
	}
	.icp-icon {
		display: flex;
		min-width: 50px;
		flex-shrink: 0;
		margin-left: 35%;
		margin-top: 15%;
	}

	#name {
		max-width: 100px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
