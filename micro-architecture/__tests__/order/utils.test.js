const { calculatePrice } = require("../../src/order/utils");

describe('calculatePrice', () => {
  test('pizza without toppings', () => {
    const pizza = {
      size: "small",
      toppings: []
    }

    const expected = 20

    expect(calculatePrice(pizza)).toBe(expected)
  })

  test('pizza with toppings', () => {
    const pizza = {
      size: "small",
      toppings: ["olives", "mushrooms"]
    }

    const expected = 30

    expect(calculatePrice(pizza)).toBe(expected)
  })
})