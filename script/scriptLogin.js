/* Formulario Login */

let loginCorreoInput = document.getElementById('loginCorreoInput');
let loginPasswordInput = document.getElementById('loginPasswordInput');

let loginCorreoSpan = document.getElementById('loginCorreoSpan');
let loginPasswordSpan = document.getElementById('loginPasswordSpan');

let arrayLoginInputs = [loginCorreoInput, loginPasswordInput];
let arrayLoginSpans = [loginCorreoSpan, loginPasswordSpan];

arrayLoginInputs.forEach((input, index) => {
    input.addEventListener('input', () => { 
        arrayLoginSpans[index].style.visibility = 'hidden';
    });
});

function validarFormularioLogin(event) {
    let boolValidacion = true;
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    console.log(JSON.stringify(data));
    
    if(loginCorreoInput.value.trim() === '') {
        loginCorreoSpan.style.visibility = 'visible';
        boolValidacion = false;
    } else {
        loginCorreoSpan.style.visibility = 'hidden';
    }

    //Validación extra correo
    let correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!correoRegex.test(loginCorreoInput.value.trim())) {
        loginCorreoSpan.style.visibility = 'visible';
        boolValidacion = false;
    } else {
        loginCorreoSpan.style.visibility = 'hidden';
    }

    if(loginPasswordInput.value.trim() === '') {
        loginPasswordSpan.style.visibility = 'visible';
        boolValidacion = false;
    } else {
        loginPasswordSpan.style.visibility = 'hidden';
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
    document.getElementById('formularioLogin').addEventListener('submit', validarFormularioLogin);
});