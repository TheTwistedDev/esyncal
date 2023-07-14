<script lang="ts">
  import type { PageData } from './$types'
  import { superForm } from 'sveltekit-superforms/client'
//   import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte'
  import { z } from 'zod'

  export let data:PageData
  
  const schema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
})
  
  const { form, errors, enhance, constraints } = superForm(data.form, {
    clearOnSubmit: 'errors-and-message',
    multipleSubmits: 'prevent',
    validators: schema,
    resetForm: true,
  })
  function showForm() {
    
  }
</script>

<div id="authoptions" class="flex flex-col gap-4 items-center">
    <h1 class="h1 text-center mt-8">Create Account</h1>

    <button class="btn variant-filled-primary rounded-md w-fit" on:click={() => showForm()}><p class="h3">Email and Password</p></button>
    <button class="btn variant-filled-primary rounded-md w-fit"><p class="h3">Google</p></button>
</div>

<!-- <SuperDebug data={$form} /> -->
<div id="formdiv" class="hidden">
    <form method="POST" use:enhance class="flex flex-col mt-20 w-[25%] ml-auto mr-auto variant-glass-surface p-4 rounded-lg gap-8">
        <h1 class="h1 text-center mt-4 mb-4"> Create account with email and password </h1>
        <label for="username" class="label">
            <span class="h3">User Name:</span>
            <input
            class="input"
            type="text"
            name="username"
            aria-invalid={$errors.username ? 'true' : undefined}
            bind:value={$form.username}
            {...$constraints.username}
        />
        {#if $errors.username}<span class="invalid">{$errors.username}</span>{/if}
        </label>
        
        <label for="email" class="label">
            <span class="h3">E-mail:</span>
            <input
            class="input"
            type="email"
            name="email"
            aria-invalid={$errors.email ? 'true' : undefined}
            bind:value={$form.email}
            {...$constraints.email}
        />
        {#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}
        </label>
    
        <label for="password" class="label">
            <span class="h3">Password:</span>
            <input
            class="input"
            type="password"
            name="password"
            aria-invalid={$errors.password ? 'true' : undefined}
            bind:value={$form.password}
            {...$constraints.password}
        />
        {#if $errors.password}<span class="invalid">{$errors.password}</span>{/if}
        </label>
    
        <button type="submit" class="btn variant-filled w-[25%] ml-auto mr-auto rounded-md variant-filled-primary"><span class="h3">Submit</span></button>
    
    </form>
     
    

    <style>
        .invalid {
            color: red;
        }
    </style>
</div>

<a href="/" class="flex h4"> Back to Home Page </a>