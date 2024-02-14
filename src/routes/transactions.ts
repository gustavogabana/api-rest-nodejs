import { FastifyInstance } from "fastify"
import { z } from 'zod'
import { knex } from "../database"

export const transactionsRoutes = async (server: FastifyInstance) => {
    server.post('/', async (request, response) => {
        const createTransactionBodySchema = z.object({
            title: z.string(),
            amount: z.number(),
            type: z.enum(['credit', 'debit'])
        })

        const { title, amount, type } = createTransactionBodySchema.parse(request.body)

        await knex('transactions').insert({
            id: crypto.randomUUID(),
            title, 
            amount: type === 'credit' ? amount : amount * -1
        })

        return response.status(201).send()
    })
}