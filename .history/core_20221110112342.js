const Customer = require('./customer');

const customer = new Customer(name = 'John', 10000, location = "Mpt", currentNetwork="Vodacom");

console.log(customer.location)
const behavior = customer.behaviorSegment()
console.log(behavior)

// function segment(customer) {

// }