const { addOrderSchema } = require('./schema')
const { validate } = require('../utils/schema')
const { calculatePrice } = require('./utils')
const { map, add, pipe, reduce } = require('ramda')
const orderDal = require('./dal')

exports.addOrder = (orderModel) => async (req, res) => {
  const { error, value } = validate(req.body, addOrderSchema)
  if (error) {
    res.status(400).end(JSON.stringify(error.details))
  } else {
    const order = await addOrder(orderModel, value)
    res.end(JSON.stringify(order))
  }
}

const addOrder = async (orderModel, order) => {
  const totalPrice = pipe(
    map(calculatePrice),
    reduce(add, 0)
  )(order.pizzas)
  const finalOrder = { ...order, price: totalPrice }
  await orderDal.create(orderModel, finalOrder)
  return finalOrder
}