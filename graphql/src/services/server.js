const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const graphqlHTTP = require('express-graphql')
const { query: helloQuery } = require('../hello/schema')
const { handlers: helloHandlers } = require('../hello/handlers')
const { query: orderQuery, mutation: orderMutation } = require('../order/handlers')
const { type: orderTypes, query: orderQuerySchema, mutation: orderMutationSchema } = require('../order/schema')
const { buildSchema } = require('graphql');

const schema = `
${orderTypes}

type Mutation {
    ${orderMutationSchema}
}

type Query {
    ${helloQuery}
    ${orderQuerySchema}
}`
const root = {
    ...helloHandlers,
    ...orderQuery,
    ...orderMutation
}

module.exports = class Server {
    constructor(port, orderModel) {
        this.port = port

        const app = express()
        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({ extended: false }))

        app.use('/graphql', graphqlHTTP({
            schema: buildSchema(schema),
            rootValue: root,
            graphiql: true,
            context: { orderModel }
        }));

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