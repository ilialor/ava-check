<script>
	import { loginII, logout, isAuthenticated, principalId } from '../auth.js';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';

	let loggedIn = false;
	let principal = '';

	function handleLogin() {
		loginII();
	}

	function handleLogout() {
		logout();
	}

	isAuthenticated.subscribe((value) => {
		loggedIn = value;
	});
</script>

<svelte:head>
	<title>aVa Check Home</title>
	<meta name="description" content="aVa Reputation Demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to aVa Reputation
		<br />
	</h1>
	{#if loggedIn}
		<h2>
			Hi, {principal}! <br /> Save your Internet Identity id and number for later use. <br /> <br />
			<!-- You can check your <a href="/cert">Certificates</a> <br />
			and <a href="/check">aVa Soulbound Reputation Token</a>. -->
		</h2>
		<button class="logout" on:click={handleLogout}> Logout</button>
	{:else}
		<button class="login" on:click={handleLogin}> Please Login with Internet Identity</button>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

	h2 {
		max-width: 450px;
		margin: 0 auto;
		text-align: center;
		margin-top: 1em;
		margin-bottom: 1em;
		font-size: 1.2em;
	}

	.login,
	.logout {
		background-color: #EE4817; 
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
