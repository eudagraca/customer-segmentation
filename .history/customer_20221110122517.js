class Customer {
  constructor(name, revenue, city, networkOperator, age = 25) {
    this.name = name;
    this.revenue = Math.ceil(revenue / 3);
    this.city = city;
    this.currentNetwork = networkOperator;
    this.age = age;
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

  marketSegment() {
    console.
    let behaviorSeg = "";
    if (this.age <= 25) {
      behaviorSeg = "YOUTH";
    } else if (this.age > 25 && (this.revenue >0 && this.revenue <= 1000)) {
      behaviorSeg = "MASS";
    } else if (this.age > 25 && this.revenue > 1000) {
      behaviorSeg = "HIGH";
    }else {
      behaviorSeg = "UNKNOWN";
    }

    return behaviorSeg;
  }
}

module.exports = Customer;
