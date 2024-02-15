import fastify from "fastify";
import { env } from "./env";
import { transactionsRoutes } from "./routes/transactions";
import cookie from '@fastify/cookie'

const server = fastify()

// The order of the registration matters, fastify will execute in order
server.register(cookie)
server.register(transactionsRoutes, {
    prefix: 'transactions'
})

server.listen({
    port: env.PORT
}).then(() => {
    console.log('HTTP Server Running at 3000!')
}).catch((err) => {
    console.log(err)
})