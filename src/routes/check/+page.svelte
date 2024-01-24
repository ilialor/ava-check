<script>
	import { onMount } from 'svelte';
	import { loginII, logout, isAuthenticated, principalId } from '../../auth.js';
	import { getBalance } from '../canister_calls.js';
	import CertCard from '../Dsbt_card.svelte';

	let loggedIn = false;
	let principal = '';
	let userBalance = ''; 

	isAuthenticated.subscribe((value) => {
		loggedIn = value;
	});

	principalId.subscribe((value) => {
		principal = value;
		if (principal) {
			getBalance(principal).then((balance) => {
				userBalance = balance;
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
				<p> Your Reputation: {userBalance}</p>
				
			{/if}
			<p />
			<button on:click={handleLogout}>Log out</button>
		</div>
	{:else}
		<button on:click={handleLogin}> Login with Internet Identity</button>
	{/if}
	<p>
		This is a <a href="https:ava.capetown/en">aVa</a> dynamis Soulbound token checking page.
	</p>

	<p />

	<p>
		<CertCard />
	</p>
</div>
