<script lang="ts">
	import { focusTrap } from '@skeletonlabs/skeleton'
</script>

<div class="card mx-auto max-w-72 p-4">
	<form method="POST" action="?/login">
		<label class="label">
			Email
			<input name="email" class="input" type="email" />
		</label>
		<label class="label">
			Password
			<input name="password" type="password" class="input" data-focusindex="1" />
		</label>
		<div class="flex justify-end pt-8">
			<button class="btn variant-gradient-primary-tertiary bg-gradient-to-br">Login</button>

			<button class="variant-glass-secondary btn ml-4" formaction="?/signup">Sign up</button>
		</div>
	</form>
	<form method="POST">
		<button class="variant-glass-secondary btn ml-4" formaction="?/login&provider=facebook"
			>Facebook</button
		>
		<button class="variant-glass-secondary btn ml-4" formaction="?/signup&provider=google"
			>Google</button
		>
	</form>
</div>
