const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const { addOrder } = require('../order/handlers')

module.exports = class Server {
    constructor(port, orderModel) {
        this.port = port

        const app = express()
        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({ extended: false }))

        app.post('/order', addOrder(orderModel))

        this.server = http.createServer(app)
    }

    start() {
        return new Promise((resolve, reject) =>
            this.server.listen(this.port, err =>
                err ? reject(err) : resolve()))
    }

    stop() {
        return new Promise((resolve, reject) =>
            this.server.close(err =>
                err ? reject(err) : resolve()))
    }
}