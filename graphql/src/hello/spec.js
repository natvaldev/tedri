const { path } = require('ramda')
const { startTestSystem, stopTestSystem, request } = require('../utils/testUtils')

describe('hello', () => {
  beforeAll(async () => {
    await startTestSystem()
  })

  afterAll(async () => {
    await stopTestSystem()
  })

  test('return world when name is not provided', async () => {
    const q = `{ hello }`;

    const res = await request(q)
    expect(path(['hello'], res)).toBe('hello world!')
  })

  test('return hello {name} when name is provided', async () => {
    const q = `{ hello (name: "itai") }`;

    const res = await request(q)
    expect(path(['hello'], res)).toBe('hello itai!')
  })
})