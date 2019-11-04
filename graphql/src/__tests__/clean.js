const Database = require('../services/database')
const { orderModel } = require('../order/model')

const db = new Database('mongodb+srv://natvaldev:p0tTmIjlFh1yF1n4@cluster0-uugk0.mongodb.net/test?retryWrites=true')

db.start()
  .then(() => orderModel.remove()
    .then(() => console.log("clean"))
    .catch(console.error))