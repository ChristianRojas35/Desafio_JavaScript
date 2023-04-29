let form = document.getElementById("formulario");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    limpiarErrores();
    let textNombre = document.querySelector("#nombre").value;
    let textAsunto = document.querySelector("#asunto").value;
    let textMensaje = document.querySelector("#mensaje").value;
    let resultado = validar(textNombre, textAsunto, textMensaje);
    if (resultado == true) {
        exito();
    };
});

function limpiarErrores() {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
};

function exito() {
    document.querySelector(".resultado").innerHTML = "Formulario pasó la validación";
};

function validar(nombre, asunto, mensaje) {
    let pasamosLaValidacion = true;

    let validacionNombre = /[a-zA-Z]/gim;
    if (validacionNombre.test(nombre) == false) {
        document.querySelector(".errorNombre").innerHTML = "Ingrese un nombre válido.";
        pasamosLaValidacion = false;
    }

    let validacionAsunto = /[a-zA-Z]/gim;
    if (validacionAsunto.test(asunto) == false) {
        document.querySelector(".errorAsunto").innerHTML = "Ingrese un mensaje válido(sólo números).";
        pasamosLaValidacion = false;
    };

    let validacionMensaje = /[a-zA-Z]/gim;
    if (validacionMensaje.test(mensaje) == false) {
        document.querySelector(".errorMensaje").innerHTML = "Ingrese un mensaje válido.";
        pasamosLaValidacion = false;
    };

    return pasamosLaValidacion;
};