const Customer = require("./customer");



function segmentBehavior(name, revenue, location, currentNetwork) {
  const customer = new Customer("John", 10000, "Mpt", "Vodacom");
  return customer;
}

module.exports = {
  segmentBehavior: segmentBehavior,
};