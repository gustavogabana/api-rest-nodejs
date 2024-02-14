import fastify from "fastify";
import { env } from "./env";
import { transactionsRoutes } from "./routes/transactions";

const server = fastify()

// The order of the registration matters, fastify will execute in order
server.register(transactionsRoutes)

server.listen({
    port: env.PORT
}).then(() => {
    console.log('HTTP Server Running at 3000!')
}).catch((err) => {
    console.log(err)
})