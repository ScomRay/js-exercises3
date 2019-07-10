const {Film} = require('./film');
class Movie extends Film {
    constructor (title, length, genre) {
        super (title);
        this.length = length;
        this.genre = genre;
    };
    getGenre () {
        return this.genre;
    };
    getLength () {
        return this.length;
    };
};
module.exports = {Movie};