import fastify from "fastify"
import { env } from "./env";
import { transactionsRoutes } from "./routes/transactions";
import cookie from '@fastify/cookie'

export const app = fastify()

// The order of the registration matters, fastify will execute in order
app.register(cookie)
app.register(transactionsRoutes, {
    prefix: 'transactions'
})