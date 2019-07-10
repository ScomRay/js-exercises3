const {Construction} = require('./construction');
class Building extends Construction {
    constructor (doors, windows, floors, address, heigth, length, width) {
        super (doors, windows, floors, address, heigth, length, width);
    };
};
module.exports = {Building};