<script>
	import CertCard from "../Cert_card.svelte";
	import { loginII, logout, isAuthenticated, principalId } from '../../auth.js';

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

{ #if loggedIn }
<div>
Привет, { principal }!
<button on:click = { handleLogout } > Выйти</button >
  </div >
{:else}
<button on:click = { handleLogin } > Войти через Internet Identity</button >
  {/if}

<div class="text-column">
	<h1>Your certificate:</h1>


<CertCard />	

</div>
