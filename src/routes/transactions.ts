import { FastifyInstance } from "fastify"
import { knex } from "../database"

export const transactionsRoutes = async (server: FastifyInstance) => {
    server.get('/hello', async () => {
        const transactions = await knex('transactions')
        .where('amount', 1000)
        .select('*')

        return transactions
    })
}