<script lang="ts">
	import { focusTrap } from '@skeletonlabs/skeleton';
</script>

<div class="card p-4 max-w-72 mx-auto">
	<form method="POST" action="?/login" use:focusTrap={true}>
		<label class="label">
			Email
			<input name="email" class="input" type="email" data-focusindex="0" />
		</label>
		<label class="label">
			Password
			<input name="password" type="password" class="input" data-focusindex="1" />
		</label>
		<div class="flex pt-8 justify-end">
			<button type="button" class="btn bg-gradient-to-br variant-gradient-primary-tertiary"
				>Login</button
			>
			<button type="button" class="btn variant-glass-secondary ml-4" formaction="?/signup"
				>Sign up</button
			>
		</div>
	</form>
</div>
