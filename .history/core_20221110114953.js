const Customer = require("./customer");

function segmentBehavior(name, revenue) {

  // fetch("http://ip-api.com/json")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     // let currentNetwork =
  //     console.log(data);
  //   });

  fetch("https://randomuser.me/api/").then(async response => {
    const data = await response.json()
    console.log({ data })
  })

  const customer = new Customer(name, revenue, "Mpt", "Vodacom");

  return customer;
}

module.exports = {
  segmentBehavior: segmentBehavior,
};
