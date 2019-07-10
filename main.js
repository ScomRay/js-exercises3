const { Physics } = require('./physics');
const { Music } = require('./music');
const { Washer } = require('./washer');
const { House } = require('./house');
const { Soda } = require('./soda');
const { Beer } = require('./beer');
const { Movie } = require('./movie');
const { Documentary } = require('./documentary');
const { Cinema } = require('./cinema');


/*const prom = function () {
    const physics = new Physics ('Physics', grades, seniority);
    grades = [];
    let physicsStudents = document.getElementById("physics").value;
    seniority = document.getElementById("seniority").value;
    for (let i = 1; i <= physicsStudents; i++) {
        let psGrades = prompt(`Ingrese la calificación del estudiante ${i} de Física`);
        grades = grades.push(psGrades);
    };
    grades = grades.reduce((acc) => {
        return sum += acc;
    }, 0);
    console.log(grades);
    let prom = sum / grades.length;
    physics.prom = prom;
    document.getElementById("solution1a").innerHTML = `${physics}`

    const music = new Music ('Music', grades2, age);
    grades2 = [];
    let musicStudents = document.getElementById("music").value;
    age = document.getElementById("age").value;
    for (let i = 1; i <= musicStudents; i++) {
        let msGrades = prompt(`Ingrese la calificación del estudiante ${i} de Música`);
        grades2 = grades2.push(msGrades);
    };
    grades2 = grades2.reduce((acc) => {
        return sum2 += acc;
    }, 0);
    console.log(grades2);
    let prom2 = sum2 / grades2.length;
    music.prom = prom2;
    document.getElementById("solution1b").innerHTML = `${music}`
    
};*/
const physics = new Physics('Physics', [10, 9, 8, 5, 10], 10);
const music = new Music('Music', [9, 8, 6, 10, 8, 10, 10, 7], 45);
console.log(physics.prom());
console.log(music.prom());
const washer = new Washer(15000, 'White', 21, 18);
washer.setEnergy(100);
console.log(washer.finalPrice());
const house = new House(9, 15, 2, 'Jacaranda 162 Fracc. Real del Ángel', 15, 20, 8);
house.setAddress('New');
console.log(house.getAddress());
console.log(house.getArea());
const beer = new Beer (355, 10);
console.log(beer.getAlcohol());
const soda = new Soda (600, 50);
console.log(soda.getSugar());
const avengers = new Movie ('Avengers: Endgame', 180, 'Action');
const ourPlanet = new Documentary ('Our Planet','David Attenborough');
const cinemex = new Cinema (50);
console.log(cinemex.play(ourPlanet));
//console.log(avengers);
console.log(cinemex.play(avengers));