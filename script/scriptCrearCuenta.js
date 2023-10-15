/* Botón Home */
function toHome(){
    setTimeout(() => {
        window.location.href = 'index.html';
    });
}

/* Formulario Crear */
let crearNombreInput = document.getElementById('crearNombreInput');
let crearCorreoInput = document.getElementById('crearCorreoInput');
let crearPasswordInput = document.getElementById('crearPasswordInput');
let crearVerificarInput = document.getElementById('crearVerificarInput');

let crearNombreSpan = document.getElementById('crearNombreSpan');
let crearCorreoSpan = document.getElementById('crearCorreoSpan');

let crearPasswordSpanEmpty = document.getElementById('crearPasswordSpanEmpty');
let crearPasswordSpanNum = document.getElementById('crearPasswordSpanNum');
let crearPasswordSpanMayus = document.getElementById('crearPasswordSpanMayus');
let crearPasswordSpanCar = document.getElementById('crearPasswordSpanCar');
let crearVerificarSpan = document.getElementById('crearVerificarSpan');

let arrayInputsCrear = [crearNombreInput, crearCorreoInput, crearPasswordInput];
let arraySpansCrear = [crearNombreSpan, crearCorreoSpan, crearPasswordSpanEmpty];
let arraySpansValidaciones = [crearPasswordSpanNum, crearPasswordSpanMayus, crearPasswordSpanCar];

arrayInputsCrear.forEach((input, index) => {
    input.addEventListener('input', () => { 
        arraySpansCrear[index].style.visibility = 'hidden';
    });
});

//Validaciones en tiempo real para contraseña
crearPasswordInput.addEventListener('input', () => {
    let password = crearPasswordInput.value;
    console.log(password);
    console.log(password.length);

    if (password.length < 8) {
        crearPasswordSpanCar.style.display = 'inline';
    } else {
        crearPasswordSpanCar.style.display = 'none';
    }

    if (!/\d/.test(password)) {
        crearPasswordSpanNum.style.display = 'inline';
    } else {
        crearPasswordSpanNum.style.display = 'none';
    }

    if (!/[A-Z]/.test(password)) {
        crearPasswordSpanMayus.style.display = 'inline';
    } else {
        crearPasswordSpanMayus.style.display = 'none';
    }
});

//Validación en tiempo real para verificar contraseña
crearVerificarInput.addEventListener('input', () => {
    if (crearPasswordInput.value !== crearVerificarInput.value) {
        crearVerificarSpan.style.visibility = 'visible';
    } else {
        crearVerificarSpan.style.visibility = 'hidden';
    }
});

function validarFormularioCrear(event) {
    let boolValidacion = true;
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    console.log(JSON.stringify(data));
    
    if(crearNombreInput.value.trim() === '') {
        crearNombreSpan.style.visibility = 'visible';
        boolValidacion = false;
    } else {
        crearNombreSpan.style.visibility = 'hidden';
    }

    if(crearCorreoInput.value.trim() === '') {
        crearCorreoSpan.style.visibility = 'visible';
        boolValidacion = false;
    } else {
        crearCorreoSpan.style.visibility = 'hidden';
    }

    //Validación extra correo
    let correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!correoRegex.test(crearCorreoInput.value.trim())) {
        crearCorreoSpan.style.visibility = 'visible';
        boolValidacion = false;
    } else {
        crearCorreoSpan.style.visibility = 'hidden';
    }

    if(crearPasswordInput.value.trim() === '') {
        crearPasswordSpanEmpty.style.visibility = 'visible';
        boolValidacion = false;
    } else {
        crearPasswordSpanEmpty.style.visibility = 'hidden';
    }

    crearVerificarInput.addEventListener('input', () => {
        if (crearPasswordInput.value !== crearVerificarInput.value) {
            crearVerificarSpan.style.visibility = 'visible';
        } else {
            crearVerificarSpan.style.visibility = 'hidden';
        }
    });
    
    if(boolValidacion == false){
        return;
    }

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);  // retraso de 2 segundos
}

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM cargado");
    document.getElementById('formularioCrear').addEventListener('submit', validarFormularioCrear);
});

