const System = require('../../src/services/system')
const { config } = require('../config')
const axios = require('axios')
const { orderModel } = require('../../src/order/model')
const { clearDatabase } = require('../utils')

describe('addOrder', () => {
  const system = new System({ dbUrl: config.dbUrl, port: config.port })

  beforeAll(async () => {
    await system.start()
    await clearDatabase()
  })

  afterEach(async () => {
    await clearDatabase()
  })

  afterAll(async () => {
    await system.stop()
  })

  test('return the price of the order', async () => {
    const order = {
      address: "Ben Gurion 100",
      pizzas: [{
        size: "small"
      }]
    }

    const res = await axios.post(`http://localhost:${config.port}/order`, order)

    expect(res.status).toBe(200)
    expect(res.data).toEqual(expect.objectContaining({
      price: 20
    }))
  })

  test('adds the order to the database', async () => {
    const before = await orderModel.find()

    const order = {
      address: "Ben Gurion 100",
      pizzas: [{
        size: "small"
      }]
    }
    await axios.post(`http://localhost:${config.port}/order`, order)

    const after = await orderModel.find()

    expect(before).toHaveLength(0)
    expect(after).toHaveLength(1)
    expect(after[0].price).toBe(20)
  })
})