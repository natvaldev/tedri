const { model } = require('mongoose')

exports.orderModel = model('order', {
    address: { type: String, required: true },
    pizzas: [{
        size: ['small', 'medium', 'large'],
        toppings: ['olives', 'mushrooms', 'onions']
    }],
    price: { type: Number, required: true }
})
