const {Film} = require('./film');
class Documentary extends Film {
    constructor (title, director) {
        super (title);
        this.director = director;
    };
    getDirector () {
        return this.director;
    };
};
module.exports = {Documentary};