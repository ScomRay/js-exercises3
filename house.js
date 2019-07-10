const {Construction} = require('./construction');
class House extends Construction {
    constructor (doors, windows, floors, address, heigth, length, width) {
        super (doors, windows, floors, address, heigth, length, width);
    };
};
module.exports = {House};