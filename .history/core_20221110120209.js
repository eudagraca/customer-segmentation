const Customer = require("./customer");

function segmentBehavior(name, revenue, city, operator) {
  const customer = new Customer(name, revenue, city, operator);
  return {
    name: customer.name,
    revenue: customer.revenue == 'undefined' ? customer.revenue : 'NA',
    city: customer.city == 'undefined' ? customer.city : 'NA',
    currentNetwork: customer.currentNetwork == 'undefined' ? customer.currentNetwork : 'NA',
    segmentBehavior: customer.behaviorSegment()
  };
}

module.exports = {
  segmentBehavior: segmentBehavior,
};
