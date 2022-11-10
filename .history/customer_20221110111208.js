class Customer {
  constructor(name, revenue, location, currentNetwork) {
    this.name = name;
    this.revenue = revenue / 3;
    this.location = location;
    this.currentNetwork = currentNetwork;
  }

  behaviorSegment() {
    let behaviorSeg = "";
    if (this.revenue >= 0 && this.revenue <= 50) {
        behaviorSeg = "low value";
    }else if (this.revenue > 50 && this.revenue <= 250){
        behaviorSeg = "";
    }
  }
}

module.exports = Customer;