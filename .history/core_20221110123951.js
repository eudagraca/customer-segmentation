const Customer = require("./customer");

function segmentCustomer(name, revenue, city, operator) {
  const customer = new Customer(name, revenue, city, operator);
  return {
    customer,
    beha: customer.segmentBehavior,
    marketSegment: customer.marketSegment,
  };
}

module.exports = {
  segmentCustomer: segmentCustomer,
};
