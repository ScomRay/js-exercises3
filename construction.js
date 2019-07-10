class Construction {
    constructor (doors, windows, floors, address, heigth, length, width) {
        this.doors = doors;
        this.windows = windows;
        this.floors = floors;
        this.address = address;
        this.heigth = heigth;
        this.length = length;
        this.width = width;
    };
    setAddress (address) {
        this.address = address;
    };
    getAddress () {
        return this.address;
    };
    getArea () {
        return this.width * this.length;
    };
};
module.exports = {Construction};