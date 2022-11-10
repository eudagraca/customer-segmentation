const Customer = require("./customer");

function segmentBehavior(name, revenue, city, operator) {
  const customer = new Customer(name, revenue, city, operator);
  return ;
}

module.exports = {
  segmentBehavior: segmentBehavior,
};
