import { segmentCustomer } from "./core.JS";

const behavior = segmentCustomer(
  (name = "Euclidio"),
  (revenue = 2500),
  (age = 30)
);
console.log(behavior.customer);