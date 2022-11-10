class Customer {
  #behaviorSeg = "";

  constructor(name, revenue, city, networkOperator, age) {
    this.name = name;
    this.revenue = Math.ceil(revenue / 3);
    this.city = city;
    this.networkOperator = networkOperator;
    this.age = age;
  }

  behaviorSegment() {
    if (this.revenue == 0) {
      this.behaviorSeg = "ZERO RATED";
    } else if (this.revenue > 0 && this.revenue <= 50) {
      this.behaviorSeg = "UL";
    } else if (this.revenue > 50 && this.revenue <= 250) {
      this.behaviorSeg = "ML";
    } else if (this.revenue > 250 && this.revenue <= 500) {
      this.behaviorSeg = "M";
    } else if (this.revenue > 500 && this.revenue <= 1000) {
      this.behaviorSeg = "H";
    } else if (this.revenue > 1000) {
      this.behaviorSeg = "UL";
    } else {
      this.behaviorSeg = "UNKNOWN";
    }

    return this.behaviorSeg;
  }

  marketSegment() {
    if (this.age <= 25 || typeof this.age === "undefined") {
      this.marketSegmentation = "YOUTH";
    } else if (this.age > 25 && this.revenue > 0 && this.revenue <= 1000) {
      this.behaviorSeg = "MASS MARKET";
    } else if (this.age > 25 && this.revenue > 1000) {
      this.behaviorSeg = "HIGH";
    } else {
      this.behaviorSeg = "UNKNOWN";
    }

    return this.behaviorSeg;
  }
}

module.exports = Customer;
