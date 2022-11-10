const { customer } = require("./lib/index")

const behavior = segmentCustomer({ name: "John Doe", revenue: 2500, age: 30 });
console.log(behavior);
