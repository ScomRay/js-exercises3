const {Film} = require('./film');
class Cinema {
    constructor (auditorium) {
        this.auditorium = auditorium;
    };
    play (film) {
        console.log(`The film ${film.getTitle()} is being played`)
    };
};
module.exports = {Cinema};