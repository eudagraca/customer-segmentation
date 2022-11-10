const Customer = require("./customer");

function segmentBehavior(name, revenue, location, currentNetwork) {
  fetch("http://ip-api.com/json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });

  const customer = new Customer("John", 10000, "Mpt", "Vodacom");

  return customer;
}

module.exports = {
  segmentBehavior: segmentBehavior,
};