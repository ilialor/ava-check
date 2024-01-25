<script>
	import { onMount } from 'svelte';
	import { loginII, logout, isAuthenticated, principalId } from '../../auth.js';
	import { getBalance, getSoulboundBadge } from '../canister_calls.js';
	import CertCard from '../Dsbt_card.svelte';

	let loggedIn = false;
	let principal = '';
	let userBalance = '';
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
			<button on:click={handleLogout}>Log out</button>
		</div>
	{:else}
		<button on:click={handleLogin}> Login with Internet Identity</button>
	{/if}
	<p>
		This is a <a href="https:ava.capetown/en">aVa</a> dynamic Soulbound token checking page.
	</p>

	<p />

	<p>
		{#if badgeReceipt.owner !== 'Ivone Drake'}
			<CertCard {badgeReceipt} />
		{/if}
	</p>
</div>
