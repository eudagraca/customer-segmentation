const Customer = require("./customer");

function customerSegmentation(name, revenue, city, operator) {
  const customer = new Customer(name, revenue, city, operator);
  return {
    customer,
    behaviorSegment: customer.behaviorSegment(),
    marketSegment: customer.marketSegment(),
  };
}

module.exports = {
  segmentCustomer: customerSegmentation,
};
