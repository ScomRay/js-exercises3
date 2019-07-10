class householdAppliance {
    constructor (price, color, energy, capacity) {
        this.price = price;
        this.color = color;
        this.capacity = capacity;
    };
    setEnergy (price) {
        this.energy = price;
    };
    getEnergy () {
        return this.energy;
    };
};
module.exports = {householdAppliance};