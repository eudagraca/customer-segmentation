const Customer = require("./customer");

function segmentBehavior(name, revenue) {
  // let location =
  fetch(
    "https://sochain.com/api/v2/address/LTC/LMSuo8W7CiXs8oFs1sJh77AQ54tCZM42Ay"
  )
    .then((res) => res.json())
    .then((obj) => document.write(obj["data"]["received_value"]));
  // fetch("http://ip-api.com/json")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     // let currentNetwork =
  //     console.log(data);
  //   });

  const customer = new Customer(name, revenue, "Mpt", "Vodacom");

  return customer;
}

module.exports = {
  segmentBehavior: segmentBehavior,
};
