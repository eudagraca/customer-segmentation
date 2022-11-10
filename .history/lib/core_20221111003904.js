const Customer = require("./customer");

function customerSegment({ name, revenue, city, networkOperator, age }) {
  const customer = new Customer(
    (name = name),
    (revenue = revenue),
    (city = city),
    (networkOperator = operator),
    (age = age)
  );
  // Execution segmentation for current customer
  customer.behaviorSegment();
  customer.marketSegment();
  return   customer
}

module.exports = {
  customerSegment: customerSegment,
};
