import fastify from "fastify";
import { knex } from "./database";

const server = fastify()

server.get('/hello', async () => {
    const tables = await knex('sqlite_schema').select('*')
    return tables
})

server.listen({
    port: 3000
}).then(() => {
    console.log('HTTP Server Running at 3000!')
}).catch((err) => {
    console.log(err)
})