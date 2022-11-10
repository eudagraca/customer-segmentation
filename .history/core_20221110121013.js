const Customer = require("./customer");

function segmentBehavior(name, revenue, city, operator) {
  const customer = new Customer(name, revenue, city, operator);
  return {
    name: typeof customer.name == "undefined" ? "NA" : customer.name,
    revenue: typeof customer.revenue == "NaN" ? 0: customer.revenue,
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
