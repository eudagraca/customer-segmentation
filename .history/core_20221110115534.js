const Customer = require("./customer");

function segmentBehavior(name, revenue, city, operator) {

  const customer = new Customer(name, revenue, city, operator);"Vodacom");

  return customer;
}

module.exports = {
  segmentBehavior: segmentBehavior,
};
