const Customer = require("./customer");

function segmentBehavior(name, revenue, city, operator) {
  const customer = new Customer(name, revenue, city, operator);
  return {
    name: customer.name !== 'undefined" ? customer.name : "NA",
    revenue: typeof customer.revenue == NaN ? customer.revenue : 0,
    city: typeof customer.city == "undefined" ? "NA" : customer.city,
    currentNetwork:
      typeof customer.currentNetwork == "undefined"
        ? "NA"
        : customer.currentNetwork,
    segmentBehavior: customer.behaviorSegment(),
  };
}

module.exports = {
  segmentBehavior: segmentBehavior,
};
