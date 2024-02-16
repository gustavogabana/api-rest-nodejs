import { it, beforeAll, afterAll, describe, expect } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

describe('Transactions routes', () => {
    beforeAll(async () => {
        app.ready()
    })
    
    afterAll(async () => {
        await app.close()
    })
    
    it('should be able to create a new transaction', async () => {
        await request(app.server).post('/transactions')
        .send({
            title: 'New transaction',
            amount: 5000,
            type: 'credit'
        })
        .expect(201)
    })

    it('should be able to list all transactions', async () => {
        const createTransactionResponse = await request(app.server).post('/transactions')
        .send({
            title: 'New transaction',
            amount: 5000,
            type: 'credit'
        })

        const cookies = createTransactionResponse.get('Set-Cookie')

        const listTransacionsResponse = await request(app.server).get('/transactions')
        .set('Cookie', cookies)
        .expect(200)

        expect(listTransacionsResponse.body.transactions).toEqual([
            expect.objectContaining({
                title: 'New transaction',
                amount: 5000
            })
        ])
    })
})