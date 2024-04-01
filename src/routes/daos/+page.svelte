<script>
	import { loginII, logout, isAuthenticated, principalId } from '../../auth.js';
	import { getBalance, getSoulboundBadge } from '../canister_calls.js';
	// import DsbtCard from '../dsbt.svelte';

	let loggedIn = false;
	let principal = '';
	let userBalance = '';
	let badgeReceipt = {
		user: 'Ivone Drake',
		total_reputation: 692,
		ava_link: 'https://ava.capetown',
		ic_link: 'https://internetcomputer.org',
		beginner: [
			['1.2.3.5', 'Rust'],
			['1.2.3.4', 'Motoko']
		],
		specialist: [
			// ['1.2.3.4', 'Motoko']
		],
		expert: [], // [['1.2.1', 'aVa']],
		history_link: 'https://check.ava.capetown'
	};

	if (badgeReceipt.specialist.length == 0) {
		// @ts-ignore
		badgeReceipt.specialist = [['Not enough reputation']];
	}
	if (badgeReceipt.expert.length == 0) {
		// @ts-ignore
		badgeReceipt.expert = [['Not enough reputation']];
	}

	isAuthenticated.subscribe((value) => {
		loggedIn = value;
	});

	principalId.subscribe((value) => {
		principal = value;
		if (principal) {
			getBalance(principal).then((balance) => {
				userBalance = balance;
			});
			getSoulboundBadge(principal).then((badge) => {
				badgeReceipt = badge;
			});
		}
	});

	function handleLogin() {
		loginII();
	}

	function handleLogout() {
		logout();
	}
</script>

<svelte:head>
	<title>DAOs</title>
	<meta name="description" content="Our DAOs" />
</svelte:head>

<div class="text-column">
	{#if loggedIn}
		<div>
			<h1>Page in progress.</h1>
			<br />
			<!-- Hi, {principal}!  -->
			You can select a DAO to join here.
			<br />
			Event Hub DAO aVa Reputation DAO IT KoLhoz DAO
			<br />
			<button class="logout" on:click={handleLogout}> Logout</button>
		</div>
	{:else}
		<button class="login" on:click={handleLogin}> Login with Internet Identity</button>
	{/if}
	<p />

	<p>
		{#if badgeReceipt.user !== 'Ivone Drake'}
			<!-- <DsbtCard badge={badgeReceipt} /> -->
		{/if}
	</p>
</div>

<style>
	.login,
	.logout {
		background-color: #ee4817;
		color: white;
		padding: 14px 20px;
		margin: 8px 0;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	.login:hover,
	.logout:hover {
		background-color: #d43504;
	}
</style>
