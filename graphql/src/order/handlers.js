const { calculatePrice } = require('./utils')
const { map, add, pipe, reduce } = require('ramda')
const orderDal = require('./dal')

exports.mutation = {
  addOrder: ({ address, pizzas }, { orderModel }) => {
    const price = pipe(
      map(calculatePrice),
      reduce(add, 0)
    )(pizzas)
    return orderDal.create(orderModel, { address, pizzas, price })
  }
}

exports.query = {
  orders: ({ }, { orderModel }) => {
    return orderDal.find(orderModel)
  }
}
