const Customer = require("./customer");

function customerSegmentation({name, revenue, city, operator, age}) {
  const customer = new Customer(name=name, revenue=revenue, city=city, operator=operator, age);
  return {
    customer,
    behaviorSegment: customer.behaviorSegment(),
    marketSegment: customer.marketSegment(),
  };
}

module.exports = {
  segmentCustomer: customerSegmentation,
};
