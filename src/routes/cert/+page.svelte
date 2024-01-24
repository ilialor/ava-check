<script>
	import { getCert } from '../canister_calls.js';
	import { loginII, logout, isAuthenticated, principalId } from '../../auth.js';
	import CertCard from '../Cert_card.svelte';

	let loggedIn = false;
	isAuthenticated.subscribe((value) => {
		loggedIn = value;
	});

	/**
	 * @typedef {Object} Certificate
	 * @property {string} owner
	 * @property {string} name
	 * @property {string} publisher
	 * @property {string} tokenId
	 * @property {string} basis
	 * @property {string} date
	 * @property {{ category: string; value: string }} reputation
	 */

	/**
	 * @type {Certificate[]}
	 */
	let certs = [];
	let principal = '';

	principalId.subscribe((value) => {
		principal = value;
		if (principal) {
			getCert(principal).then((certs) => {
				console.log(certs);
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
	<title>Certificate</title>
	<meta name="description" content="User's certificates" />
</svelte:head>

{#if loggedIn}
	<div>
		Привет, {principal}!
		<button on:click={handleLogout}> Logout</button>
	</div>
{:else}
	<button on:click={handleLogin}> Login with Internet Identity</button>
{/if}

<div class="text-column">
	<h1>Your certificate:</h1>

	<CertCard cert={certs} />
</div>

<style>
	.button {
		background-color: #4caf50;
		border: none;
		color: white;
		padding: 10px 10px;
		text-align: center;
		text-decoration: none;
		margin-left: 1rem;
	}
</style>
