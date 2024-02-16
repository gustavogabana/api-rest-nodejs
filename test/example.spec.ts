import { test, beforeAll, afterAll } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

beforeAll(async () => {
    app.ready()
})

afterAll(async () => {
    await app.close()
})

test('user can create new transaction', async () => {
    await request(app.server).post('/transactions')
    .send({
        title: 'New transaction',
        amount: 5000,
        type: 'credit'
    })
    .expect(201)
})