const {Drink} = require ('./drink');
class Soda extends Drink {
    constructor (content, sugar) {
        super (content);
        this.sugar = sugar;
    };
    setSugar (sugar) {
        this.sugar = sugar;
    };
    getSugar () {
        return this.sugar;
    };
};
module.exports = {Soda};