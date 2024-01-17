<script>

	import CertCard from "../Cert_card.svelte";

</script>
<svelte:head>
	<title>Check</title>
	<meta name="description" content="Check SBT token" />
</svelte:head>

<div class="text-column">
	<h1>About this app</h1>

	<p>
		This is a <a href="https:ava.capetown/en">aVa</a> app. 
	</p>
	
	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>

	<p>
		<CertCard /> 
	</p>
</div>
