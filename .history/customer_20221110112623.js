class Customer {
  constructor(name, revenue, location, currentNetwork) {
    this.name = name;
    this.revenue = revenue;
    this.location = location;
    this.currentNetwork = currentNetwork;
  }

  behaviorSegment() {
    let behaviorSeg = "";
    if ((this.revenue == 0)) {
      behaviorSeg = "zero rated";
    } else if (this.revenue > 0 && this.revenue <= 50) {
      behaviorSeg = "ultra low";
    } else if (this.revenue > 50 && this.revenue <= 250) {
      behaviorSeg = "medium low";
    } else if (this.revenue > 250 && this.revenue <= 500) {
      behaviorSeg = "medium";
    } else if (this.revenue > 500 && this.revenue <= 1000) {
      behaviorSeg = "ultra high";
    } else if (this.revenue > 1000) {
      behaviorSeg = "high";
    } else {
      behaviorSeg = "unknown";
    }

    return this.revenue;
  }
}

module.exports = Customer;
