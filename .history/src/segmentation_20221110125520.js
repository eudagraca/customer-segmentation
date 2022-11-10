import Customer from "./customer";

function customerSegmentation({ name, revenue, city, operator, age }) {
  const customer = new Customer(
    (name = name),
    (revenue = revenue),
    (city = city),
    (networkOperator = operator),
    (age = age)
  );
  return {
    customer,
    behaviorSegment: customer.behaviorSegment(),
    marketSegment: customer.marketSegment(),
  };
}

export const segmentCustomer = customerSegmentation;
