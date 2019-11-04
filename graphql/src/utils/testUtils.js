const { GraphQLClient } = require('graphql-request')
const System = require('../services/system')

const config = {
  dbUrl: 'mongodb+srv://natvaldev:p0tTmIjlFh1yF1n4@cluster0-uugk0.mongodb.net/test?retryWrites=true',
  port: 9000
}
exports.config = config

const client = (new GraphQLClient('http://localhost:9000/graphql'))
const system = new System(config)

exports.request = q => client.request(q)
exports.startTestSystem = () => system.start()
exports.stopTestSystem = () => system.stop()