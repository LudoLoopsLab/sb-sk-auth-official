<script>
	export let data;
	$: ({ countries } = data);
</script>

<h1>Welcome to Supabase!</h1>
<a href="/auth">auth</a>
<ul>
	{#each countries as country}
		<li>{country.name}</li>
	{/each}
</ul>
