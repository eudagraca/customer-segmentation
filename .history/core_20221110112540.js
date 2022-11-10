const Customer = require("./customer");

const customer = new Customer("John", 10000, "Mpt", "Vodacom");

console.log(customer);
const behavior = customer.behaviorSegment();
console.log(behavior);

// function segment(customer) {

// }

class User {

    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      console.log(this.name);
    }
  
  }
  
  // Usage:
  let user = new User("John");
  user.sayHi();