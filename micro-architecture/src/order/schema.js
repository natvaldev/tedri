const joi = require('@hapi/joi')

const pizzaSchema = joi.object({
  size: joi.string().allow('small', 'medium', 'large').required(),
  toppings: joi.string().allow('olives', 'mushrooms', 'onions').default([])
})

exports.addOrderSchema = joi.object({
  address: joi.string().required(),
  pizzas: joi.array().items(pizzaSchema).required()
})