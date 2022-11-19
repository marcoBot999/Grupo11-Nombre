window.addEventListener("load", function () {
    const formulario = document.querySelector("form.formProductos");
    const campoNombreProd = document.querySelector('#name');
    const campoDescripcion = document.querySelector('#description');
    const campoImagen = document.querySelector('#img');

    const imagen = /(.jpg|.jpeg|.png|.gif)$/i;
    let existenErrores = false;

    formulario.addEventListener("submit", function (e) {

        validaCampos();
        if (existenErrores == true) {
            e.preventDefault();
        }
    })

    const validaCampos = function () {
        existenErrores = false;

        if (campoNombreProd.value == "") {
            validacionFalla(campoNombreProd, "Debes agregar un nombre para el producto");
        } else if (campoNombreProd.value.length < 5) {
            validacionFalla(campoNombreProd, "El nombre debe tener al menos 5 caracteres");
        } else {
            validacionOk(campoNombreProd, "");
        };

        if (campoDescripcion.value == "") {
            validacionFalla(campoDescripcion, "Debes agregar una descripción");
        } else if (campoDescripcion.value.length < 20) {
            validacionFalla(campoDescripcion, "La descripción debe tener al menos 20 caracteres");
        } else {
            validacionOk(campoDescripcion, "");
        };

        if (!imagen.exec(campoImagen.value)) {
            validacionFalla(campoImagen, "La imagen debe ser un archivo válido (JPG, JPEG, PNG, GIF)");
        } else {
            validacionOk(campoImagen, "");
        };
    }
    const validacionFalla = (input, msje) => {
        const formControl = input.parentElement;
        const aviso = formControl.querySelector('p');
        aviso.innerText = msje;

        formControl.className = 'form-control falla';
        existenErrores = true;
    }

    const validacionOk = (input, msje) => {
        const formControl = input.parentElement;
        const aviso = formControl.querySelector('p');
        aviso.innerText = msje;

        formControl.className = 'form-control ok';
    }
})