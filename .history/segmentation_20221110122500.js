const { behaviorSegment, marketSegment } = require("./core");

const behavior = behaviorSegment(name="Euclidio", revenue=2500, age);
console.log(behavior.customer.marketSegment());
// console.log(marketSegment)