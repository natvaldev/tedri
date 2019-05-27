const mongoose = require('mongoose')

module.exports = 
class Database {
    constructor(dbUrl) {
        this.dbUrl = dbUrl
    }

    start() {
        return mongoose.connect(this.dbUrl, { useNewUrlParser: true });
    }

    stop() {
        return mongoose.disconnect()
    }
}