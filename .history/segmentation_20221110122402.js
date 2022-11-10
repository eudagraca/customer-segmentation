const { behaviorSegment, marketSegment } = require("./core");

const behavior = behaviorSegment("Euclidio", 2500);
console.log(behavior.customer.marketSegment());
// console.log(marketSegment)