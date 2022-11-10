const Customer = require("./customer");

function segmentBehavior(name, revenue, city, operator) {
  const customer = new Customer(name, revenue, city, operator);
  return {
    name: customer.name !== 'undefined' ? customer.name : 'NA',
    revenue: typeof customer.revenue == NaN ? 0 : customer.revenue,
    city: customer.city == 'undefined' ? customer.city : 'NA',
    currentNetwork: typeof customer.currentNetwork !== 'undefined' ? customer.currentNetwork : 'NA',
    segmentBehavior: customer.behaviorSegment()
  };
}

module.exports = {
  segmentBehavior: segmentBehavior,
};