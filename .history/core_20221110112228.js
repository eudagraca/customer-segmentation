const Customer = require('./customer');

const customer = new Customer(name = 'John',revenue = 10000, location = "Mpt", currentNetwork="Vodacom");

console.log(customer.location)
const behavior = customer.behaviorSegment()

// function segment(customer) {

// }