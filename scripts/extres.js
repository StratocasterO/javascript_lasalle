// Math

console.log(Math.PI);
console.log(Math.SQRT2);

console.log(Math.random());

// funció dau

function dau(n) {
    return parseInt(1 + n * Math.random())
}

// TODO: funció que retorni un sencer random entre a i b - aleatori(a, b) -> [a, b]

function aleatori(a, b) {
    return parseInt(a + (b + 1 - a) * Math.random())
}

console.log(aleatori(22,24));
console.log(aleatori(22,24));
console.log(aleatori(22,24));
console.log(aleatori(22,24));
console.log(aleatori(22,24));
console.log(aleatori(22,24));
console.log(aleatori(22,24));
console.log(aleatori(22,24));
console.log(aleatori(22,24));
console.log(aleatori(22,24));






























// Fechas
time = new Date("Sat Jul 20 2024 09:30:00 GMT+0200 (hora de verano de Europa central)")

console.log(time);
console.log(time.getTime());
console.log(time.toLocaleString());
console.log(time.toLocaleTimeString());
console.log(time.toLocaleDateString());

// Temporizadores

// Errores, try...catch