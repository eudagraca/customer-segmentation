const Customer = require("./customer");

function segmentBehavior(name, revenue) {
      // let location = 

  fetch("http://ip-api.com/json")
    .then((response) => response.json())
    .then((data) => {
      // let currentNetwork = 
      console.log(data);
    });

  const customer = new Customer(name, 10000, "Mpt", "Vodacom");

  return customer;
}

module.exports = {
  segmentBehavior: segmentBehavior,
};
