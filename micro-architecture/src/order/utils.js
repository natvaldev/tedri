const TOPPING_PRICE = 5

const sizePrice = {
    'small': 20,
    'medium': 25,
    'large': 30
}

exports.calculatePrice = pizza => {
    const basePrice = sizePrice[pizza.size]
    const toppingsPrice = pizza.toppings.length * TOPPING_PRICE
    return basePrice + toppingsPrice
}