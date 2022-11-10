const Customer = require("./customer");

function segmentBehavior(name, revenue, city, operator) {
  const customer = new Customer(name, revenue, city, operator);
  return {
    name: customer.name,
    revenue: customer.revenue,
    city: customer.city == 'undefined' ? customer.city : 'NA',
    currentNetwork: customer.city == 'undefined' ? customer.city : 'NA',
    segmentBehavior: customer.behaviorSegment()
  };
}

module.exports = {
  segmentBehavior: segmentBehavior,
};