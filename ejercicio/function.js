function devolveTrue() {
    return true
}

async function DameUnaPromesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}

function* idsPares() {
    let id = 0
    while(true) {
        yield id += 2
    }
}