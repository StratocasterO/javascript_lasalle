const url = "https://pruebasalle-a1814-default-rtdb.europe-west1.firebasedatabase.app/"
const project = "omar-olmedo/"
const database = "prueba.json"

fetch(url + project + database)
    .then(res => res.json())
    .then(res => {
        console.log(res)

        // let idAlumne

        // for (const id in res) {
        //     if (res[id].nom == "Carlos") {
        //         idAlumne = id;
        //         break;
        //     }
        // }

        // console.log("ID de Carlos: " + idAlumne);
    })

function postAlumne(nom, edat, pelo) {
    fetch(url + project + database, {
        method: 'POST',
        body: JSON.stringify({ nom, edat, pelo })
    })
        .then(res => res.json())
        .then(res => console.log(res))
}