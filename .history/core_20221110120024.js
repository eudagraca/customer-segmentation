const Customer = require("./customer");

function segmentBehavior(name, revenue, city, operator) {
  const customer = new Customer(name, revenue, city, operator);
  return {
    name: customer.name,
    revenue: customer.revenue,
    city: message !== 'undefined' ? message : 'Hi' customer.city,
    currentNetwork: customer.currentNetwork,
    segmentBehavior: customer.behaviorSegment()
  };
}

module.exports = {
  segmentBehavior: segmentBehavior,
};
