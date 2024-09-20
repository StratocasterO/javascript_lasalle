let buttons = {
    cat: document.querySelector("#cat"),
    es: document.querySelector("#es"),
    en: document.querySelector("#en")
}

let content = document.querySelectorAll(".trans")

// TODO provar amb "window.navigator.language" o "navigator.browserLanguage"

// Comprova si hi ha un idioma guardat al localStorage i canvia l'idioma
if (localStorage.getItem("lang")) {
    if (localStorage.getItem("lang") == "es") setLanguage("es")
    else if (localStorage.getItem("lang") == "en") setLanguage("en")
} else localStorage.setItem("lang", "cat")

// TODO: refactorizar para que use [lang] ⬇

// Canvia l'idioma al clicar un botó
cat.addEventListener("click", () => {
    setLanguage("cat")
})
es.addEventListener("click", () => {
    setLanguage("es")
})
en.addEventListener("click", () => {
    setLanguage("en")
})

// Funció que canvia l'idioma
function setLanguage(lang) {
    // Canvio els textos de la pàgina
    for (let i = 0; i < content.length; i++) {
        content[i].textContent = copy[lang][i]
    }
    // Recorro l'objecte que guarda els buttons per afegir/treure la classe "active"
    for (const key in buttons) {
        if (key == lang) buttons[key].classList.add("active") // buttons.cat <--> buttons["cat"]
        else buttons[key].classList.remove("active")
    }

    // Guardo l'idioma actual
    localStorage.setItem("lang", lang)
}

// -------------------------------------------------------------------------------------------

let theme = document.querySelector("#theme")

// Comprovo si al local storage hi ha un tema guardat
if(localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") == "dark") setTheme("dark")
} else localStorage.setItem("theme", "light")

// Canvio el tema al clicar el botó
theme.addEventListener("click", () => {
    if (localStorage.getItem("theme") == "light") setTheme("dark")
    else setTheme("light")
})

// Funció que canvia el tema
function setTheme(newTheme) {
    if (newTheme == "dark") {
        document.querySelector("link[rel='stylesheet']").href = "../styles/dark.css"
        theme.innerText = "🌞"
        console.log("holaaaaa");
        
        localStorage.setItem("theme", "dark")
    } else {
        document.querySelector("link[rel='stylesheet']").href = "../styles/light.css"
        theme.innerText = "🌚"
        localStorage.setItem("theme", "light")
    }
}