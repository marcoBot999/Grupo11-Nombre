window.addEventListener("load", function () {
    const formulario = document.querySelector("form.formRegistro");
    const campoNombre = document.querySelector('#firstname');
    const campoApellido = document.querySelector('#lastname');
    const campoEmail = document.querySelector('#email');
    const campoContrasenia = document.querySelector('#password');
    const campoImagen = document.querySelector('#img');

    const imagen = /(.jpg|.jpeg|.png|.gif)$/i;
    const correo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        validaCampos();
    });

    const validaCampos = function () {
        if (campoNombre.value == "") {
            validacionFalla(campoNombre, "Debes agregar un nombre");
        } else if (campoNombre.value.length < 2) {
            validacionFalla(campoNombre, "El nombre debe tener al menos 2 caracteres");
        } else {
            validacionOk
        };

        if (campoApellido.value == "") {
            validacionFalla(campoApellido, "Debes agregar un apellido");
        } else if (campoApellido.value.length < 2) {
            validacionFalla(campoApellido, "El apellido debe tener al menos 2 caracteres");
        } else {
            validacionOk
        };

        if (campoEmail.value == "") {
            validacionFalla(campoEmail, "Debes ingresar un email");
        } else if (!correo.test(campoEmail.value)) {
            validacionFalla(campoEmail, "Debes ingresar un email válido");
        } else {
            validacionOk
        };

        if (campoContrasenia.value == "") {
            validacionFalla(campoContrasenia, "Debes agregar una contraseña");
        } else if (campoContrasenia.value.length < 8) {
            validacionFalla(campoContrasenia, "La contraseña debe tener mínimo 8 caracteres");
        } else {
            validacionOk
        };

        if (!imagen.exec(campoImagen.value)) {
            validacionFalla(campoImagen, "La imagen debe ser un archivo válido (JPG, JPEG, PNG, GIF)");
        } else {
            validacionOk
        };
    }
    const validacionFalla = (input, msje) => {
        const formControl = input.parentElement;
        const aviso = formControl.querySelector('p');
        aviso.innerText = msje;

        formControl.className = 'form-control falla';
    }

    const validacionOk = (input, msje) => {
        const formControl = input.parentElement;

        formControl.className = 'form-control ok';
    }
})