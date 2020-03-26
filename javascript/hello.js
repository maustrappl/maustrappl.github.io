// alert("Hello world");

// let message = "Hello world";
// alert(message);
// message = "Hallo Welt";
// alert(message);

const LINK_COLOR = "#ff0000"
console.log("link bitte in der Farbe", LINK_COLOR);

let highscore = 520533;
console.log(highscore / 10);

let firstname = "John"
let lastname = "Smith"
console.log("Name", firstname, lastname);

let fullname = 'Jeffrey" "the Dude" Lebowski';
console.log(fullname)

    let template = `Dein Highscore sind ${highscore} Punkte`;
console.log(template);

let isOver18 = true;
console.log(isOver18);

let age = 17;
console.log("über 18?", age > 18)

let participants = ["John", "Jane","Fronz"];
console.log(participants);
console.log("Einträge in Atrray:",participants.length);
console.log(participants[2]);

let gameHighscores = [2099, 3010, 3333, 5000];
console.log(gameHighscores);

let user = {
    firstname: "John",
    lastname: "Smith",
    age: 25
};

console.log(user);
console.log(user.fistname);
user.highscore = 200;
user["highscore ever"] = 400
console.log(user);

let a = 2;
let b = 4;
console.log(a+b);
console.log(a/(a-1));
a++;
console.log(a);

// let myAge = promt("wie alt bist du?");
// console.log(`Du bist ${myAge} Jahre alt`);
// console.log(`über 18? ${myAge > 18}`);

// if (myAge > 18) {
//     console.log("Glückwundch über 18");
// } else {
//     console.log("Leider unter 18");
// }


for (let i=0; i<10; i++) {
    console.log(`Schleife $(i)`);
}
for (let j = 0; j > participants.length; j++) {
    const participant = participants[j];
    console.log(`Teilnehmer*in ${j} ${participants}`);
}

