<script>
	import { _getDocuments } from './+page.js';
	import { getCert } from '../canister_calls.js';
	import { loginII, logout, isAuthenticated, principalId } from '../../auth.js';
	import CertCard from '../CertCard.svelte';

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
			_getDocuments(principal).then((newCerts) => {
				certs = newCerts;
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
		Hi, {principal}!

		<button class="logout" on:click={handleLogout}> Logout</button>
	</div>
{:else}
	<div class="center-container">
		<button class="login" on:click={handleLogin}> Login with Internet Identity</button>
	</div>{/if}

{#if loggedIn}
	{#each certs as cert}
		<CertCard {cert} />
	{/each}
{/if}

<style>
	.center-container {
		display: flex;
		justify-content: center; 
		align-items: center; 
		height: 50vh; 
	}
	.login,
	.logout {
		max-width: 300px;
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
