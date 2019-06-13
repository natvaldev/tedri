exports.type = `
enum Size {
  small
  medium
  large
}

enum Topping{
  olives
  mushrooms
  onions
}

type Pizza {
  size: [Size!]
  toppings: [Topping!]
}

input PizzaInput {
  size: Size!
  toppings: Topping!
}

type Order {
  address: String!
  price: Int!
  pizzas: [Pizza]
}`

exports.query = `
orders: [Order]`

exports.mutation = `
addOrder(address: String!, pizzas: [PizzaInput]!): Order`