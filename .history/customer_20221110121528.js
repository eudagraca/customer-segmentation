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
      behaviorSeg = "ZERO RATED";
    } else if (this.revenue > 0 && this.revenue <= 50) {
      behaviorSeg = "UL";
    } else if (this.revenue > 50 && this.revenue <= 250) {
      behaviorSeg = "ML";
    } else if (this.revenue > 250 && this.revenue <= 500) {
      behaviorSeg = "M";
    } else if (this.revenue > 500 && this.revenue <= 1000) {
      behaviorSeg = "H";
    } else if (this.revenue > 1000) {
      behaviorSeg = "UL";
    } else {
      behaviorSeg = "UNKNOWN";
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
      behaviorSeg = "ML";
    } else if (this.revenue > 250 && this.revenue <= 500) {
      behaviorSeg = "M";
    } else if (this.revenue > 500 && this.revenue <= 1000) {
      behaviorSeg = "H";
    } else if (this.revenue > 1000) {
      behaviorSeg = "UL";
    } else {
      behaviorSeg = "UNKNOWN";
    }

    return behaviorSeg;
  }
}

module.exports = Customer;
