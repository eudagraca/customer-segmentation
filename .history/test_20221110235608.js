const { segmentCustomer } = require("./lib/index")

const behavior = segmentCustomer({ name: "EuJclidio", revenue: 2500, age: 30 });
console.log(behavior);
