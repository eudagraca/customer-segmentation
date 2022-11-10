const { behaviorSegment, marketSegment } = require("./core");

const behavior = behaviorSegment(
  (name = "Euclidio"),
  (revenue = 2500),
  (age = 30)
);
console.log(behavior.customer.marketSegment());
