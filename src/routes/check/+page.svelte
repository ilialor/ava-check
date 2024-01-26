<script>
	import { loginII, logout, isAuthenticated, principalId } from '../../auth.js';
	import { getBalance, getSoulboundBadge } from '../canister_calls.js';
	import DsbtCard from '../dsbt.svelte';

	let loggedIn = false;
	let principal = '';
	let userBalance = '';
	let badgeReceipt = {
		user: 'Ivone Drake',
		total_reputation: 695,
		ava_link: 'https://ava.capetown',
		ic_link: 'https://internetcomputer.org',
		beginner: [{ code: '1.2.3.5', name: 'Rust' }],
		specialist: [
			{ code: '1.2.3.4', name: 'Motoko' },
			{ code: '7.2.2.45', name: 'Texas Holdem' }
		],
		expert: [{ code: '1.2.2.1', name: 'Internet Computer Core' }],
		history_link: 'https://check.ava.capetown'
	};

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
	<title>Check</title>
	<meta name="description" content="Check SBT token" />
</svelte:head>

<div class="text-column">
	<h1>aVa Check</h1>
	{#if loggedIn}
		<div>
			Hi, {principal}!
			<p />
			{#if userBalance !== ''}
				<p>Your Reputation: {userBalance}</p>
			{/if}
			<p />
			<button class="out" on:click={handleLogout}> Logout</button>
		</div>
	{:else}
		<button on:click={handleLogin} id="login"> Login with Internet Identity</button>
	{/if}
	<p>
		This is a <a href="https:ava.capetown/en">aVa</a> dynamic Soulbound token checking page.
	</p>

	<p />

	<p>
		{#if badgeReceipt.user !== 'Ivone Drake'}
			<DsbtCard badge={badgeReceipt} />
		{/if}
	</p>
</div>

<style>
	button {
		max-width: 200px;
	}
	.out {
		background-color: #f19823;
		border: none;
		color: white;
		padding: 10px 10px;
		text-align: center;
		text-decoration: none;
		margin-left: 2rem;
	}
	#login {
		background-color: #f19823;
		border: none;
		text-align: center;
	}	
</style>
