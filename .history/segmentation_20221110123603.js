import { segmentCustomer } from "./core.j";

const behavior = segmentCustomer(
  (name = "Euclidio"),
  (revenue = 2500),
  (age = 30)
);
console.log(behavior.customer);