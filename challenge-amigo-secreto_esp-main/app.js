// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista donde guardaremos los nombres
let listaAmigos = [];

// Agregar nombre a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    listaAmigos.push(nombre);
    input.value = ""; // limpiar el campo
    mostrarLista();
}

// Mostrar la lista en pantalla
function mostrarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // limpiar lista antes de mostrar

    listaAmigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

//  Sortear amigo secreto
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    let indice = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[indice];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}
