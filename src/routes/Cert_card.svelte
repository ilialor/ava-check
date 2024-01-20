<script>
	import arrow from '$lib/images/arrow.svg';
	import aVa_logo from '$lib/images/aVa_logo.png';
	import card_background from '$lib/images/card-background.svg';
	import evolution from '$lib/images/evolution.svg';

	import card_title from '$lib/images/card-title-not-filled.svg';

	import icp_logo from '$lib/images/icp-logo.svg';

	import rep2 from '$lib/images/rep2.svg';

	// import Card from "./Card.svelte";

	// function updateBadge(event) {
	//     event.preventDefault();
	//     badgeReceipt.owner = inputOwner;
	//     badgeReceipt.userId = Number(inputUserId);
	//     badgeReceipt.reputation.total = Number(inputTotalReputation);
	//     badgeReceipt.reputation.specialist = specialists;
	//     badgeReceipt.reputation.expert = experts;
	// }

	// Demo data
	let website = 'https://ava.capetown/en';
	let icp_link = 'https://internetcomputer.org';
	let badgeReceipt = {
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

	let evolution_link = badgeReceipt.reputation.evolution + badgeReceipt.userId?.toString() ?? '';

	let inputOwner = '';
	let inputUserId = 0;
	let inputTotalReputation = 0;
	let specialists = [{ code: '', name: '' }];
	let experts = [{ code: '', name: '' }];

	function addSpecialist() {
		specialists = [...specialists, { code: '', name: '' }];
	}

	// function removeSpecialist(index) {
	//     specialists = specialists.filter((_, i) => i !== index);
	// }

	// function addExpert() {
	//     experts = [...experts, { code: "", name: "" }];
	// }

	// function removeExpert(index) {
	//     experts = experts.filter((_, i) => i !== index);
	// }
	// let specialistIdCounter = 0;
	// let expertIdCounter = 0;
</script>

<main>
	<!-- <h1>Component Demo</h1> -->

	<!-- Badge input form -->
	<!-- <div class="formcard">
        <form on:submit|preventDefault={updateBadge} class="form-content">
            <div class="form-item">
                <label for="owner" class="info-label">Owner Name:</label>
                <input
                    id="owner"
                    type="text"
                    bind:value={inputOwner}
                    class="info-value"
                    placeholder="Owner Name"
                />
            </div>
            <div class="form-item">
                <label for="userId" class="info-label">User ID:</label>
                <input
                    id="userId"
                    type="number"
                    bind:value={inputUserId}
                    class="info-value"
                    placeholder="User ID"
                />
            </div>
            <div class="form-item">
                <label for="reputation" class="info-label"
                    >Total Reputation:</label
                >
                <input
                    id="reputation"
                    bind:value={inputTotalReputation}
                    class="info-value"
                    placeholder="Total Reputation"
                />
            </div>

            <div class="dynamic-fields">
                {#each specialists as specialist, index}
                    <div class="dynamic-field">
                        <label
                            class="form-label"
                            for={`specialist-code-${index}`}>Code:</label
                        >
                        <input
                            class="form-input"
                            id={`specialist-code-${index}`}
                            bind:value={specialist.code}
                            placeholder="1.1.1.1"
                        />

                        <label
                            class="form-label-name"
                            for={`specialist-name-${index}`}>Name:</label
                        >
                        <input
                            class="form-input-name"
                            id={`specialist-name-${index}`}
                            bind:value={specialist.name}
                            placeholder="aVa"
                        />

                        <button on:click={() => removeSpecialist(index)}
                            >Remove</button
                        >
                    </div>
                {/each}
                <button on:click={addSpecialist}>Add Specialist</button>
            </div>

            <div class="dynamic-fields">
                {#each experts as expert, index}
                    <div class="dynamic-field">
                        <label class="form-label" for={`expert-code-${index}`}
                            >Code:</label
                        >
                        <input
                            class="form-input"
                            id={`expert-code-${index}`}
                            bind:value={expert.code}
                            placeholder="1.1.1.1"
                        />

                        <label class="form-label-name" for={`expert-name-${index}`}
                            >Name:</label
                        >
                        <input
                            class="form-input-name"
                            id={`expert-name-${index}`}
                            bind:value={expert.name}
                            placeholder="aVa"
                        />

                        <button on:click={() => removeExpert(index)}
                            >Remove</button
                        >
                    </div>
                {/each}
                <button on:click={addExpert}>Add Expert</button>
            </div>

            <button type="submit" class="form-submit">Update Badge</button>
        </form>
    </div> -->

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
					{badgeReceipt.reputation.total}
				</div>
			</div>
		</div>
		<div class="card-content">
			<div class="card-info">
				<div class="info-item">
					<span class="info-label">Name:</span>
					<span class="info-value" id="name">{badgeReceipt.owner}</span>
				</div>
				<div class="info-item">
					<span class="info-label">Specialist:</span>
					<span
						class="info-value"
						id="specialist"
						title={badgeReceipt.reputation.specialist.map((s) => s.name).join('; ')}
					>
						{badgeReceipt.reputation.specialist.map((s) => s.code).join('; ')}
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
						title={badgeReceipt.reputation.expert.map((s) => s.name).join('; ')}
						>{badgeReceipt.reputation.expert.map((s) => s.code).join('; ')}<a
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
	<!-- <Card /> -->
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
		width: 21.875rem;
		height: 22.25rem;
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

	/* Form styles */

	.formcard {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 750px;
		height: 100%;
		max-height: 22.25rem;
		border-radius: 0.625rem;
		border: 1px solid #fff;
		background: linear-gradient(161deg, #00155d 8.46%, #013440 91.91%);
		background-image: url({card_background});
		background-size: cover;
		background-repeat: no-repeat;
		color: var(--color-white);
		/* overflow: auto; */
	}

	.form-content {
		font-family: 'Montserrat', 'Goldman', sans-serif;
		padding: 16px;
		text-align: left;
		font-size: var(--font-size-base);
		color: var(--color-white);
		overflow-y: auto;
		max-height: 500px;
		width: 100%;
	}

	.form-label {
		font-size: var(--font-size-less);
		width: 120px;
		text-align: right;
		color: #07d1fd;
		margin-right: 1rem;
		flex-shrink: 0;
	}

	.form-label-name {
		width: 50px;
		color: #07d1fd;
	}

	.form-input {
		width: 150px;
	}

	.form-item {
		display: flex;
		align-items: center;
		margin-bottom: 12px;
	}

	.form-input-name {
		width: 3rem;
	}

	.form-submit {
		background: transparent;
		border: 1px solid #07d1fd;
		border-radius: 4px;
		color: var(--color-white);
		padding: 8px;
		width: 80%;
		margin-left: 1rem;
		cursor: pointer;
		margin-top: 12px;
		background-color: var(--primary-color);
		border: none;
		padding: 10px 10px;
		font-size: var(--font-size-base);
	}

	.dynamic-field {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}

	.dynamic-field input {
		margin-right: 10px;
	}

	.dynamic-field button {
		margin-left: 10px;
	}

	button {
		border-radius: 4px;
		background-color: var(--primary-color);
		border: none;
		color: var(--color-white);
		padding: 5px 5px;
	}
</style>
