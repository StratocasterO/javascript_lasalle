// userName es una variable que tiene dentro una String
userName = "Omar";
userSurname = 'Olmedo';
const ESPACIO = " ";

// una String con backticks es un template literal
userTitle = `Professor`;

console.log(userTitle);
console.log(userName);
console.log(userSurname);

console.log(userTitle, userName, userSurname);

userName = "Pablo";

console.log(userTitle + ' ' + userName + ' ' + userSurname);
console.log(userTitle + ESPACIO + userName + ESPACIO + userSurname);

userSurname = "Rodríguez";

console.log(`¿Qué tal estás, ${userName} ${userSurname}?`);

userAge = 33; // Number
userExperience = 10;
userHasHair = false; // Boolean

console.log(userName + userAge);
console.log(userAge + userExperience);

userExperience = "diez";
console.log(userAge + userExperience);

console.log("Edad: " + userAge, "\nAños de experiencia: " + userExperience);

// ESPACIO = "-";

a = 1;
b = 2;

c = a;
a = b;
b = c;

console.log(a, b); // 2, 1

[a, b] = [b, a]

console.log(a, b); // 1, 2

// ----------------------------------------------------------------------------

// Transformació de tipus de variables

const PI = "3.1415"
radi = 4.5

console.log("L'àrea del cercle és: " + PI*radi**2);

cercle = {
    area: PI*radi**2 + " metros cuadrados"
}

console.log(typeof cercle.area, typeof parseFloat(cercle.area));

radiString = radi.toString()

console.log(radiString, typeof radiString);
console.log(" ");

data = {
    data0: PI,
    data1: parseFloat(PI),
    data2: parseInt(PI),
    data3: radi,
    data4: radi.toString()
}

console.log(data.data0, typeof data.data0);
console.log(data.data1, typeof data.data1);
console.log(data.data2, typeof data.data2);
console.log(data.data3, typeof data.data3);
console.log(data.data4, typeof data.data4);