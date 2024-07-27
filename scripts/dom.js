console.log("Exercicis DOM");

// tot el document HTML
console.log(document)

// accés a propietats del DOM
console.log(document.title);
console.log(document.URL);

// accés a les propietats d'un element concret
console.log(document.querySelector("h1").style)
console.log(document.querySelector("h1").innerHTML)
console.log(document.querySelector("h1").innerText)

// accés a les propietats renderitzades d'un element (NO ÉS DOM!! ⚠)
const titol = document.querySelector("h1")
console.log(window.getComputedStyle(titol).getPropertyValue("color"))
console.log(window.getComputedStyle(titol).getPropertyValue("font-family"))

// innerHTMl vs innerText vs textContent
console.log(document.querySelector("header").innerHTML)
console.log(document.querySelector("header").textContent)
console.log(document.querySelector("header").innerText)

// guardar un element dins una variable
const header = document.querySelector("header")
header.innerHTML = "<h1>Document Object Model</h1>"
header.innerHTML += "<h3>Pàgina de proves modificant el DOM amb JavaScript</h3>"

console.log(document.querySelector("style").textContent)

setTimeout(() => {
    document.querySelector("style").textContent = `
        body {
            background-color: rgb(250, 249, 248);
            font-family: 'Courier New', Courier, monospace;
            margin: 0;
            padding: 0;
        }
        main {
            margin: auto;
            width: 800px;
        }
        .bold {
            font-weight: bold;
        }
        header, section, footer {
            padding: 20px;
        }
        header {
            background-color: #bf783d;
            color: white;
            text-align: center;
        }
        section {
            border-bottom: 1px solid #ddd;
        }
        img {
            max-height: 200px;
            height: auto;
            float: left;
            margin: 5px 15px 0 0;
        }
        form {
            max-width: 400px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
            background-color: #f9f9f9;
        }
        label, input, textarea {
            display: block;
            width: 100%;
            margin-bottom: 10px;
        }
        input[type="submit"] {
            background-color: #bf783d;
            color: white;
            border: none;
            cursor: pointer;
            padding: 10px;
        }
        input[type="submit"]:hover {
            background-color: #c46f29;
        }
        footer{
            text-align: center;
        }
        `
}, 2000)

setTimeout(() => {
    header.style.backgroundColor = `#b13cb9`
    document.querySelector('input[type="submit"]').style.backgroundColor = `#b13cb9`
    // document.querySelector('input[type="submit"]:hover').style.backgroundColor = `#67196d`
}, 4000)

setTimeout(canviarCSS, 6000)

function canviarCSS() {
    document.querySelector("link[rel='stylesheet']").href = "../styles/dom_styles.css"
}

// afegir contingut a una secció
section2 = document.querySelector("#section2") 
section2OriginalContent = document.querySelector("#section2").innerHTML

section2.innerHTML += '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, itaque! Explicabo quibusdam harum mollitia dolorem asperiores quis. Cupiditate est, perferendis quasi cumque iste molestiae reprehenderit!</p>'

section2.innerHTML += '<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus amet sunt voluptates consequuntur ad perspiciatis labore error impedit aliquid architecto veniam earum exercitationem aliquam tenetur, <span class="custom">blanditiis voluptatibus explicabo quod numquam enim fugiat!</span> Tenetur doloremque assumenda cupiditate blanditiis saepe necessitatibus omnis!</p>'

// selecciona més d'un element amb un selector
const images = document.querySelectorAll("img")
console.log(images);

fetch(`https://api.thecatapi.com/v1/images/search?limit=${images.length}`)
.then(res => res.json())
.then(res => {
    console.log(res)

    for (let i = 0; i < images.length; i++) {
        images[i].src = res[i].url
    }
})

console.log(section2OriginalContent);
console.log(section2.innerHTML);

const customTexts = document.querySelectorAll(".custom")

customTexts[0].style.fontWeight = "bold"
customTexts[1].style.fontStyle = "italic"
customTexts[2].style.color = "#b13cb9"
customTexts[3].style.fontVariant = "small-caps"