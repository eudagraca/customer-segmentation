class Customer {
  constructor(name, revenue, city, networkOperator) {
    this.name = name;
    this.revenue = Math.ceil(revenue / 3);
    this.city = city;
    this.currentNetwork = networkOperator;
  }

  behaviorSegment() {
    let behaviorSeg = "";
    if (this.revenue == 0) {
      behaviorSeg = "zero rated";
    } else if (this.revenue > 0 && this.revenue <= 50) {
      behaviorSeg = "ultra low";
    } else if (this.revenue > 50 && this.revenue <= 250) {
      behaviorSeg = "medium low";
    } else if (this.revenue > 250 && this.revenue <= 500) {
      behaviorSeg = "medium";
    } else if (this.revenue > 500 && this.revenue <= 1000) {
      behaviorSeg = "high";
    } else if (this.revenue > 1000) {
      behaviorSeg = "ultra high";
    } else {
      behaviorSeg = "unknown";
    }

    return behaviorSeg;
  }

  revenueSegment() {
    let behaviorSeg = "";
    if (this.revenue == 0) {
      behaviorSeg = "ZERO RATED";
    } else if (this.revenue > 0 && this.revenue <= 50) {
      behaviorSeg = "UL";
    } else if (this.revenue > 50 && this.revenue <= 250) {
      behaviorSeg = "medium low";
    } else if (this.revenue > 250 && this.revenue <= 500) {
      behaviorSeg = "medium";
    } else if (this.revenue > 500 && this.revenue <= 1000) {
      behaviorSeg = "high";
    } else if (this.revenue > 1000) {
      behaviorSeg = "ultra high";
    } else {
      behaviorSeg = "unknown";
    }

    return behaviorSeg;
  }
}

module.exports = Customer;
