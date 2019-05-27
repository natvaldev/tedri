const System = require('../src/services/system')
const { config } = require('./config')

describe('system', () => {
  test('successfuly start and stop', async () => {
    const system = new System({ dbUrl: config.dbUrl, port: config.port })
    await system.start()
    await system.stop()
  })
})