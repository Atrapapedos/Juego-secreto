let NumeroSecreto = GenerarNumeroSecreto();
let intentos = 1;
let numeroMaximo = 10;
let listaNumerosSorteados = [];

console.log(NumeroSecreto);

function AsignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;  // Usar textContent en lugar de innerHTML
}

function VerificarIntento() {
    let NumeroDeUsuario = parseInt(document.getElementById('ValorUsuario').value);
    console.log(intentos);

    if (NumeroDeUsuario === NumeroSecreto) {
        AsignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (NumeroDeUsuario > NumeroSecreto) {
        AsignarTextoElemento('p', 'El número secreto es menor');
    } else {
        AsignarTextoElemento('p', 'El número secreto es mayor');
    }

    intentos++;
    limpiarCaja();
}

function limpiarCaja() {
    document.getElementById('ValorUsuario').value = '';  // Cambiado a getElementById para mayor claridad
}

function GenerarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    

    if (listaNumerosSorteados.length === numeroMaximo) {
        AsignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else if (listaNumerosSorteados.includes(numeroGenerado)) {
        return GenerarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function CondicionesInciciales() {
    AsignarTextoElemento('h1', 'Juego del número de pequeña Shita');
    AsignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    NumeroSecreto = GenerarNumeroSecreto();
    intentos = 1;
    listaNumerosSorteados = [];  // Reiniciar la lista de números sorteados
}

function reiniciarJuego() {
    limpiarCaja();
    CondicionesInciciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');  // Cambiado a getElementById para mayor claridad
}

CondicionesInciciales();
