// Math

console.log(Math.PI);
console.log(Math.SQRT2);

console.log(Math.random());

// funció dau (aleatori entre 1 i N)

function dau(n) {
    return parseInt(1 + n * Math.random())
}

tirades = []

for (let i = 0; i < 10; i++) {
    tirades.push(dau(20))
}

console.log(tirades);

// funció que retorni un sencer random entre a i b: aleatori(a, b) -> [a, b] (els dos inclosos)

function aleatori(a, b) {
    return parseInt(a + (b + 1 - a) * Math.random())
}

aleatoris = []

for (let i = 0; i < 30; i++) {
    aleatoris.push(aleatori(20, 40))
}

console.log(aleatoris);

// TODO: fer estadística amb els números aleatoris (freqüència, mitjana, mediana, desviació típica)

// Fechas

let time = new Date()
console.log(time);

let time2 = new Date(1990, 11, 16)
console.log(time2);

let time3 = new Date('Jul 20 2024 11:00')
console.log(time3);

console.log(time.getMinutes());
console.log(time3.getMinutes());
console.log(time3.getTime());

let time4 = new Date("Sat Jul 20 2024 09:30:00 GMT+0200 (hora de verano de Europa central)")

console.log(time4);
console.log(time4.getTime());
console.log(time4.toLocaleString());
console.log(time4.toLocaleTimeString());
console.log(time4.toLocaleDateString());

let start = Date.now()

for (let i = 0; i < 1000000000; i++) {
    let a = 2 + 3
}

let finish = Date.now()

console.log(`He tardado ${finish - start} ms en hacer 1.000.000.000 sumas`);

// Temporizadores

console.time("bucle")
console.time("bucle2")
console.time("bucle3")

for (let i = 0; i < 10000000; i++) {
    let a = 2 + 3
}

console.timeEnd("bucle")

for (let i = 0; i < 10000000; i++) {
    let a = 2 + 3
}

console.timeEnd("bucle2")

for (let i = 0; i < 10000000; i++) {
    let a = 2 + 3
}

console.timeEnd("bucle3")

// Errores, try...catch

try {
    if (Math.random() < 0.5) throw new Error("Algo ha fallado")
} catch (error) {
    console.log(`%cHa habido un error: ` + error.message, "color: red");
}

console.log("Hola")

// Classes

class Vehicle {
    constructor(marca, modelo) {
        this.marca = marca
        this.modelo = modelo
    }

    arrancar() {
        console.log("Arrancando");
    }

    frenar() {
        console.log("Frenando");
    }
}

moto = new Vehicle("Honda", "CBR")
console.log(moto.modelo);
moto.frenar();

class Coche extends Vehicle {
    constructor(marca, modelo, puertas) {
        super(marca, modelo)
        this.puertas = puertas
    }

    abrirMaletero() {
        console.log("Abriendo el maletero");
    }
}

coche = new Coche("Ford", "Focus")
console.log(coche.puertas);
coche.puertas = 5;
console.log(coche.puertas);
coche.arrancar();