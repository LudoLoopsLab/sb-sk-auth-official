<script lang="ts">
	import { goto, invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { AppBar } from '@skeletonlabs/skeleton';

	import '../app.postcss';
	import { page } from '$app/stores';

	export let data;

	$: ({ session, supabase } = data);
	$: classesActive = (href: string) =>
		href === $page.url.pathname ? '!variant-ghost-primary' : '';

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (!newSession) {
				/**
				 * Queue this as a task so the navigation won't prevent the
				 * triggering function from completing
				 */
				setTimeout(() => {
					goto('/', { invalidateAll: true });
				});
			}
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<header>
	<AppBar background="bg-surface-100-800-token">
		<nav class="list-nav">
			<ul class="flex">
				<li><a href="/" class={classesActive('/')}>home</a></li>
				<li><a href="/auth" class={classesActive('/auth')}>auth</a></li>
			</ul>
		</nav>
	</AppBar>
</header>

<div class="px-8 pt-8">
	<slot />
</div>
