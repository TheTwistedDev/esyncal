import { superValidate } from 'sveltekit-superforms/server'
import { fail, redirect } from '@sveltejs/kit'
import { z } from 'zod'

import type { Actions, PageServerLoad } from './$types'
import { auth } from '$lib/server/lucia'

const schema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
})

export const load: PageServerLoad = async ({locals}) => {
    // Server API:
    const form = await superValidate(schema)
	const session = await locals.auth.validate()
	if (session) throw redirect(302, "/")
    // return form 
    return { form }
}

export const actions: Actions = {
	default: async ({ request, locals }) => {
		// Use superValidate in form actions too, but with the request
		const form = await superValidate(request, schema);
		const username = form.data.username
		const password = form.data.password
		console.log('POST', form);

		// Convenient validation check:
		if (!form.valid) {
			// Again, always return { form } and things will just work.
			return fail(400, { form });
		}

		// TODO: Do something with the validated data
		try {
			const user = await auth.createUser({
				key: {
					providerId: "username",
					providerUserId: username,
					password
				},
				attributes: {
					username
				}
			})
			const session = await auth.createSession({
				userId: user.userId,
				attributes: {}
			})
			locals.auth.setSession(session)
			
		} catch {
			return fail(400)
		}
		// Yep, return { form } here too
		return { form };
		throw redirect(302,"/")
	}
};

