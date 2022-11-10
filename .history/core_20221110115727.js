const Customer = require("./customer");

function segmentBehavior(name, revenue, city, operator) {
  const customer = new Customer(name, revenue, city, operator);
  return {
    name: cu,
    revenue: 1000,
    city: undefined,
    currentNetwork: undefined
  };
}

module.exports = {
  segmentBehavior: segmentBehavior,
};
