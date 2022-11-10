const { segmentBehavior } = require("./core");

const behavior = segmentBehavior("Euclidio", 3000)
console.log(behavior)

fetch("https://randomuser.me/api/").then(async response => {
    const data = await response.json()
    console.log({ data })
  })
