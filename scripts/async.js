// exercicis promises i asincronia

// funció que retorna una promesa que es resol a vegades
function promise(prob) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < prob) resolve("Promesa resuelta")
            else reject("Promesa rechazada")
        }, 2000)
    })
}

promise(0.5)
.then(res => {
    console.log("%c" + res, "color: green");
})
.catch(err => {
    console.log("%c" + err, "color: red");
})

// funció que retorna una promesa que es resol en un temps aleatori
function randomPromise(time) {
    let delay = 1000*time*Math.random();

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promesa resuelta en " + delay.toFixed(0) + " ms")
        }, delay)
    })
}

randomPromise(2)
.then(res => {
    console.log("%c" + res, "color: green");
})

// funció asíncrona que espera a que es resolgui una promesa
async function gestionarPromise() {
    let res 
    console.log("Estoy esperando una promesa")

    try {
        res = await promise(0.5)
        console.log("El estado ha cambiado: " + res);
    } catch (error) {
        console.log("La promesa ha fallado: " + error);
    }
    
}

gestionarPromise()

// gestió d'errors (recordatori)
try {
    throw new Error("Ha fallado todo!")
} catch (error) {
    console.log(error.message);
}

console.log("Esto no se va a ejecutar");