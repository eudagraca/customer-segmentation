const Customer = require("./customer");

function segmentBehavior(name, revenue, city, operator) {

  const customer = new Customer(name, revenue, "Mpt", "Vodacom");

  return customer;
}

module.exports = {
  segmentBehavior: segmentBehavior,
};
