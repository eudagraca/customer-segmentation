const { segmentCustomer } = require("./lib/index")

const behavior = segmentCustomer({ name: "Euclidio", revenue: 2500, age: 30 });
console.log(behavior);
