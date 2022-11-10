const { customerSegment } = require("./lib/index")

const behavior = customerSegment({ name: "John Doe", revenue: 2500, age: 30 });
console.log(behavior);
