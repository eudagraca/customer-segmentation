const Customer = require("./customer");

function segmentBehavior(name, revenue, province) {

  const customer = new Customer(name, revenue, "Mpt", "Vodacom");

  return customer;
}

module.exports = {
  segmentBehavior: segmentBehavior,
};
