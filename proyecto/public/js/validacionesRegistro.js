window.addEventListener("load", function () {
    const formulario = document.querySelector("form.formRegistro");
    const campoNombre = document.querySelector('#firstname');
    const campoApellido = document.querySelector('#lastname');
    const campoEmail = document.querySelector('#email');
    const campoContrasenia = document.querySelector('#password');
    const campoImagen = document.querySelector('#img');

    const imagen = /(.jpg|.jpeg|.png|.gif)$/i;
    const correo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let existenErrores = false;

    formulario.addEventListener("submit", function (e) {

        validaCampos();
        if (existenErrores == true) {
            e.preventDefault();
        }

    });

    const validaCampos = function () {
        existenErrores = false;

        if (campoNombre.value == "") {
            validacionFalla(campoNombre, "Debes agregar un nombre");
        } else if (campoNombre.value.length < 2) {
            validacionFalla(campoNombre, "El nombre debe tener al menos 2 caracteres");
        } else {
            validacionOk(campoNombre, "");
        };

        if (campoApellido.value == "") {
            validacionFalla(campoApellido, "Debes agregar un apellido");
        } else if (campoApellido.value.length < 2) {
            validacionFalla(campoApellido, "El apellido debe tener al menos 2 caracteres");
        } else {
            validacionOk(campoApellido, "");
        };

        if (campoEmail.value == "") {
            validacionFalla(campoEmail, "Debes ingresar un email");
        } else if (!correo.test(campoEmail.value)) {
            validacionFalla(campoEmail, "Debes ingresar un email válido");
        } else {
            validacionOk(campoEmail, "");
        };

        if (campoContrasenia.value == "") {
            validacionFalla(campoContrasenia, "Debes agregar una contraseña");
        } else if (campoContrasenia.value.length < 8) {
            validacionFalla(campoContrasenia, "La contraseña debe tener mínimo 8 caracteres");
        } else {
            validacionOk(campoContrasenia, "");
        };

        if (!imagen.exec(campoImagen.value)) {
            validacionFalla(campoImagen, "La imagen debe ser un archivo válido (JPG, JPEG, PNG, GIF)");
        } else if (campoImagen.value.length > 50) {
            validacionFalla(campoImagen, "El nombre de la imagen debe tener máximo 50 caracteres");
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