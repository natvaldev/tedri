const System = require('./services/system')

const main = async (config) => {
    const system = new System({ dbUrl: config.DB_URL, port: config.PORT })
    await system.start()
}

main(process.env)
    .catch(console.error)
