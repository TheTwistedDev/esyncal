import { superValidate } from 'sveltekit-superforms/server'
import { fail } from '@sveltejs/kit'
import { z } from 'zod'

import type { Actions, PageServerLoad } from './$types'

const schema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
})

export const load: PageServerLoad = async (event) => {
    // Server API:
    const form = await superValidate(event, schema)

    // return form 
    return { form }
}

export const actions: Actions = {
	default: async ({ request }) => {
		// Use superValidate in form actions too, but with the request
		const form = await superValidate(request, schema);
		console.log('POST', form);

		// Convenient validation check:
		if (!form.valid) {
			// Again, always return { form } and things will just work.
			return fail(400, { form });
		}

		// TODO: Do something with the validated data

		// Yep, return { form } here too
		return { form };
	}
};

