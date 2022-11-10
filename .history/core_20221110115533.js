const Customer = require("./customer");

function segmentBehavior(name, revenue, city, operator) {

  const customer = new Customer(name, revenue, city, "Vodacom");

  return customer;
}

module.exports = {
  segmentBehavior: segmentBehavior,
};
