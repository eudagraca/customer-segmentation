const Customer = require("./customer");

function segmentBehavior(name, revenue, city, opera) {

  const customer = new Customer(name, revenue, "Mpt", "Vodacom");

  return customer;
}

module.exports = {
  segmentBehavior: segmentBehavior,
};