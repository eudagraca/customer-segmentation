const Customer = require("./customer");

fetch("http://ip-api.com/json")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("p_location").innerHTML = `${data.regionName}`;
    console.log(data);
  });


function segmentBehavior(name, revenue, location, currentNetwork) {
  const customer = new Customer("John", 10000, "Mpt", "Vodacom");
  return customer;
}

module.exports = {
  segmentBehavior: segmentBehavior,
};
