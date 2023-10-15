/* Formulario Contáctanos */

let nombreInput = document.getElementById('nombreInput');
let correoInput = document.getElementById('correoInput');
let mensajeInput = document.getElementById('mensajeInput');
let telefonoInput = document.getElementById('telefonoInput');

let nombreSpan = document.getElementById('nombreSpan');
let correoSpan = document.getElementById('correoSpan');
let mensajeSpan = document.getElementById('mensajeSpan');
let telefonoSpan = document.getElementById('telefonoSpan');

let arrayInputs = [nombreInput, correoInput, mensajeInput, telefonoInput];
let arraySpans = [nombreSpan, correoSpan, mensajeSpan, telefonoSpan];

arrayInputs.forEach((input, index) => {
    input.addEventListener('input', () => { 
        arraySpans[index].style.visibility = 'hidden';
    });
});

function validarFormularioContactanos(event) {
    let boolValidacion = true;
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    console.log(JSON.stringify(data));
    
    if(nombreInput.value.trim() === '') {
        nombreSpan.style.visibility = 'visible';
        boolValidacion = false;
    } else {
        nombreSpan.style.visibility = 'hidden';
    }

    if(correoInput.value.trim() === '') {
        correoSpan.style.visibility = 'visible';
        boolValidacion = false;
    } else {
        correoSpan.style.visibility = 'hidden';
    }

    //Validación extra correo
    let correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!correoRegex.test(correoInput.value.trim())) {
        correoSpan.style.visibility = 'visible';
        boolValidacion = false;
    } else {
        correoSpan.style.visibility = 'hidden';
    }

    //Validación extra para telefono
    let telefonoRegex = /^\d{1,15}$/;
    if (telefonoInput.value.trim() !== '' && !telefonoRegex.test(telefonoInput.value.trim())) {
        telefonoSpan.style.visibility = 'visible';
        boolValidacion = false;
    } else {
        telefonoSpan.style.visibility = 'hidden';
    }

    
    if(mensajeInput.value.trim() === '') {
        mensajeSpan.style.visibility = 'visible';
        boolValidacion = false;
    } else {
        mensajeSpan.style.visibility = 'hidden';
    }

    if(boolValidacion == false){
        return;
    }

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);  // retraso de 2 segundos
}

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM cargado");
    document.getElementById('formularioContactanos').addEventListener('submit', validarFormularioContactanos);
});

