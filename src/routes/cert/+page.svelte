<script>
	import { onMount } from 'svelte';
	import { loginII, logout, isAuthenticated, principalId } from '../../auth.js';
	import CertCard from '../Cert_card.svelte';
  
	let loggedIn = false;
	isAuthenticated.subscribe(value => {
	  loggedIn = value;
	});
  
	let principal = '';
	principalId.subscribe(value => {
	  principal = value;
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
	  <button on:click={handleLogout}>Выйти</button>
	</div>
  {:else}
	<button on:click={handleLogin}>Войти через Internet Identity</button>
  {/if}
  
  <div class="text-column">
	<h1>Your certificate:</h1> 

	<CertCard />
</div>
<style>
	.button {
		background-color: #4CAF50;
		border: none;
		color: white;
		padding: 10px 10px;
		text-align: center;
		text-decoration: none;
		margin-left: 1rem;
	}
</style>
