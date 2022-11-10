const Customer = require("./customer");

function segmentBehavior(name, revenue, city, operator) {
  const customer = new Customer(name, revenue, city, operator);
  return {
    name: customer.name !== 'undefined' ? customer.name : 'NA',
    revenue: customer.revenue == 'NaN' ? customer.revenue : 0,
    city: customer.city == 'undefined' ? customer.city : 'NA',
    currentNetwork: customer.currentNetwork == 'undefined' ?  'NA': customer.currentNetwork,
    segmentBehavior: customer.behaviorSegment()
  };
}

module.exports = {
  segmentBehavior: segmentBehavior,
};