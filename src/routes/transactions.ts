import { FastifyInstance } from "fastify"
import { z } from 'zod'
import { knex } from "../database"

export const transactionsRoutes = async (server: FastifyInstance) => {

    server.get('/', async () => {
        const transactions = await knex('transactions').select('*')

        return {
            transactions
        }
    })

    server.get('/:id', async (request) => {
        const getTransactionParamsSchema = z.object({
            id: z.string().uuid()
        })

        const { id } = getTransactionParamsSchema.parse(request.params)

        const transaction = await knex('transactions')
        .where('id', id)
        .first()

        return {
            transaction
        }
    })

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