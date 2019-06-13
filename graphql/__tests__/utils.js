const { orderModel } = require('../src/order/model')

exports.clearDatabase = async () => {
  await orderModel.remove()
}