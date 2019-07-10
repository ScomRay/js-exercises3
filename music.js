const {Teacher} = require ('./teacher');
class Music extends Teacher {
    constructor (subject, grades, age) {
        super ("Music", grades);
        this.subject = subject;
        this.grades = grades;
        this.age = age;
    };
    setAge (age) {
        this.age = age;
    };
    getAge () {
        return this.age;
    };
};
module.exports = {Music};