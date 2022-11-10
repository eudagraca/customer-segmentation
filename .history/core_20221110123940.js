const Customer = require("./customer");

function segmentCustomer(name, revenue, city, operator) {
  const customer = new Customer(name, revenue, city, operator);
  return {
    customer,
    segmentBehavior: customer.segmentBehavior,
    marketService
  };
}

module.exports = {
  segmentCustomer: segmentCustomer,
};
