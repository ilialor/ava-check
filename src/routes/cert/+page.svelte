<script>
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
			getCert(principal).then((newCerts) => {
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
		
		<button class="out" on:click={handleLogout}> Logout</button>
	</div>
{:else}
	<button on:click={handleLogin}> Login with Internet Identity</button>
{/if}

{#if loggedIn && certs.length > 0}
{#each certs as cert}
	<CertCard cert={cert} />
{/each}

	<CertCard cert={certs[certs.length - 1]} />
{/if}

<style>
	.out {
		background-color: #f19823;
		border: none;
		color: white;
		padding: 10px 10px;
		text-align: center;
		text-decoration: none;
		margin-left: 2rem;
	}	
</style>
