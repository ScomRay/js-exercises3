const {Drink} = require ('./drink');
class Beer extends Drink {
    constructor (content, alcohol) {
        super (content);
        this.alcohol = alcohol;
    };
    setAlcohol (alcohol) {
        this.alcohol = alcohol;
    };
    getAlcohol () {
        return this.alcohol;
    }
};
module.exports = {Beer};