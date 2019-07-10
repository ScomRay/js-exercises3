class Teacher {
    constructor (subject, grades) {
        this.subject = subject;
        this.grades = grades;
    };
    getSubject () {
        return this.subject;
    };
    setGrades (grades) {
        this.grades = grades;
    };
    getGrades () {
        return this.grades;
    };
    prom () {
        let sum = 0;
        for (let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        };
        return (sum / this.grades.length);
    };
};
module.exports = {Teacher};