const {householdAppliance} = require ('./household app');
class Washer extends householdAppliance {
    constructor (price, color, capacity, load) {
        super (price, color, capacity);
        this.load = load;
    };
    finalPrice () {
        return `Total: $${this.getEnergy()*this.load}`;
    };
};
module.exports = {Washer};