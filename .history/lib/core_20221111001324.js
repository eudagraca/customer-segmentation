const Customer = require("./customer");

function customerSegmentation({ name, revenue, city, operator, age }) {
  const customer = new Customer(
    (name = name),
    (revenue = revenue),
    (city = city),
    (networkOperator = operator),
    (age = age)
  );
  customer.behaviorSegment();
  return {
    customer
  };
}

module.exports = {
  segmentCustomer: customerSegmentation,
};