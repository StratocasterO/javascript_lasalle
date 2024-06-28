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

// TODO: arrays, objects