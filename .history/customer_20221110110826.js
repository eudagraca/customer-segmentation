class Customer{
    constructor(name, revenue, location, currentNetwork) {
        this.name = name;
        this.revenue = revenue;
        this.location = location;
        this.currentNetwork = currentNetwork;
    }

    behaviorSegmentation() {
        if (this.revenue > 0 && this.revenue < 50) {
            
        }
    }
}

module.exports = Customer;