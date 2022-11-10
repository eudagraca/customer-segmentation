class Customer {
  constructor(name, revenue, location, currentNetwork) {
    this.name = name;
    this.revenue = revenue / 3;
    this.location = location;
    this.currentNetwork = currentNetwork;
  }

  behaviorSegment() {
    if (this.revenue > 0 && this.revenue < 50) {
        
    }
  }
}

module.exports = Customer;
