const Database = require("./database");
const Server = require('./server')
const { orderModel } = require('../order/model')

module.exports = class System {
    constructor({ dbUrl, port }) {
        this.database = new Database(dbUrl)
        this.server = new Server(port, orderModel)
    }

    async start() {
        await this.database.start()
        console.log('database connection established')
        await this.server.start()
        console.log(`server is listening at ${this.server.port}`)

        console.log('system is running')
    }

    async stop() {
        await this.database.stop()
        await this.server.stop()
    }
}