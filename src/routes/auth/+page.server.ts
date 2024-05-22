import { type Provider } from '@supabase/supabase-js'
import { fail, redirect } from '@sveltejs/kit'

import type { Actions } from './$types'

const OAUTH_PROVIDERS = ['facebook', 'google']

export const actions: Actions = {
	signup: async ({ request, locals: { supabase } }) => {
		console.log('signup')
		const formData = await request.formData()
		const email = formData.get('email') as string
		const password = formData.get('password') as string

		const { error } = await supabase.auth.signUp({ email, password })
		if (error) {
			console.error(error)
			return redirect(303, '/auth/error')
		} else {
			return redirect(303, '/')
		}
	},
	login: async ({ request, locals: { supabase }, url }) => {
		const provider = url.searchParams.get('provider') as Provider
		if (provider) {
			if (!OAUTH_PROVIDERS.includes(provider)) {
				return fail(400, {
					error: 'Provider not supported'
				})
			}
			const { data, error: err } = await supabase.auth.signInWithOAuth({ provider })

			if (err) {
				console.log(err)
				return fail(400, { message: 'something went wrong' })
			}
			throw redirect(303, data.url)
		}

		const formData = await request.formData()
		const email = formData.get('email') as string
		const password = formData.get('password') as string

		const { error } = await supabase.auth.signInWithPassword({ email, password })
		if (error) {
			console.error(error)
			return redirect(303, '/auth/error')
		} else {
			return redirect(303, '/private')
		}
	}
}
