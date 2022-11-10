class Customer {
  #behaviorSeg = "";

  constructor(name, revenue, city, networkOperator, age) {
    this.name = name;
    //Segmentation is determined by the revenue
    this.revenue = Math.ceil(revenue / 3);
    this.city = city;
    this.networkOperator = networkOperator;
    this.age = age;
  }

  behaviorSegment() {
    if (this.revenue == 0) {
      this.behaviorSegmentation = "ZERO RATED";
    } else if (this.revenue > 0 && this.revenue <= 50) {
      this.behaviorSegmentation = "UL";
    } else if (this.revenue > 50 && this.revenue <= 250) {
      this.behaviorSegmentation = "ML";
    } else if (this.revenue > 250 && this.revenue <= 500) {
      this.behaviorSegmentation = "M";
    } else if (this.revenue > 500 && this.revenue <= 1000) {
      this.behaviorSegmentation = "H";
    } else if (this.revenue > 1000) {
      this.behaviorSegmentation = "UL";
    } else {
      this.behaviorSegmentation = "UNKNOWN";
    }

    return this.behaviorSeg;
  }

  marketSegment() {
    if (this.age <= 25 || typeof this.age === "undefined") {
      this.marketSegmentation = "YOUTH";
    } else if (this.age > 25 && this.revenue > 0 && this.revenue <= 1000) {
      this.marketSegmentation = "MASS MARKET";
    } else if (this.age > 25 && this.revenue > 1000) {
      this.marketSegmentation = "HIGH";
    } else {
      this.marketSegmentation = "UNKNOWN";
    }

    return this.marketSegmentation;
  }
}

module.exports = Customer;
