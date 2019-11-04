const { orderModel } = require('../order/model')

orderModel.remove()
  .then(() => console.log("clean"))
  .catch(console.error)