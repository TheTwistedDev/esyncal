import { lucia } from 'lucia'
import { drizzle } from 'drizzle-orm/planetscale-serverless'
import { connect } from '@planetscale/database'
import { planetscale } from '@lucia-auth/adapter-mysql'
import { DB_HOST, DB_PASSWORD, DB_USERNAME } from '$env/static/private'
import { sveltekit } from 'lucia/middleware'
import { dev } from '$app/environment';

const connection = connect({
    host: DB_HOST,
    username: DB_USERNAME,
    password: DB_PASSWORD
})

export const db = drizzle(connection)

export const auth = lucia({
    adapter: planetscale(connection, {
        user: "auth_user",
        key: "auth_key",
        session: "auth_session"
    }),
    env: dev ? 'DEV' : 'PROD',
    middleware: sveltekit(),
    getUserAttributes: (databaseUser) => {
        return {
            username: databaseUser.username,
        }
    }
})

export type Auth = typeof auth

