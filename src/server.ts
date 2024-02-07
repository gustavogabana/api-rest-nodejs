import fastify from "fastify";

const server = fastify()

server.get('/hello', () => {
    return 'Hello, World!'
})

server.listen({
    port: 3000
}).then(() => {
    console.log('HTTP Server Running at 3000!')
}).catch((err) => {
    console.log(err)
})