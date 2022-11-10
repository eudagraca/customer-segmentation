const Customer = require("./customer");

function segmentBehavior(name, revenue, city, operator) {
  const customer = new Customer(name, revenue, city, operator);
  return {
    name: customer.name,
    revenue: customer.revenue,
    city: customer.city,
    currentNetwork: customer.currentNetwork,
    
  };
}

module.exports = {
  segmentBehavior: segmentBehavior,
};