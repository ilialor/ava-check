<script>
	import { loginII, logout, isAuthenticated, principalId } from '../../auth.js';
	import { _client_canister_actor as client } from './+page.js';
	import SubForm from './SubForm.svelte';

	let loggedIn = false;

	function handleLogin() {
		loginII();
	}

	function handleLogout() {
		logout();
	}
</script>

<svelte:head>
	<title>Hub Subscription</title>
	<meta name="description" content="Subscription Request" />
</svelte:head>

<div class="text-column">
	{#if loggedIn}
		<div>
			<SubForm />

			<button class="logout" on:click={handleLogout}> Logout</button>
		</div>
	{:else}
		<button class="login" on:click={handleLogin}> Login with Internet Identity</button>
	{/if}
	<p />
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
