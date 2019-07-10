const {Teacher} = require ('./teacher');
class Physics extends Teacher {
    constructor (subject, grades, seniority){
        super ("physics", grades);
        this.subject = subject;
        this.grades = grades;
        this.seniority = seniority;
    };
    setSeniority (seniority) {
        this.seniority = seniority;
    };
    getSeniority () {
        return this.seniority;
    };
};
module.exports = {Physics};